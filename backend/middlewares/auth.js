const { getUser } = require("../service/auth");

function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    const authHeader = req.headers["authorization"];
    const token = tokenCookie || (authHeader && authHeader.split(" ")[1]);

    req.user = null;

    if (!token) {
        return next();
    }
    const user = getUser(token);

    if (user) {
        req.user = user;
    }

    return next();
}

function restrictTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({ error: "Authentication required" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Unauthorized: Insufficient permissions" });
        }

        return next();
    };
}

module.exports = {
    checkForAuthentication,
    restrictTo,
};

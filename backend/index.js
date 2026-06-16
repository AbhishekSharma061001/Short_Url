require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./connection");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");

const URL = require("./models/url");

const userRoute = require("./routes/user");
const urlRoute = require("./routes/urlRoutes");

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

connectDB(MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.error("DB Connection Failed:", err.message);
        process.exit(1);
    });

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL"]), urlRoute);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    if (!shortId) {
        return res.status(400).json({ error: "ShortId is required" });
    }
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timeStamp: Date.now() } } }
        );
        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        res.redirect(entry.redirectURL);
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT}`);
});

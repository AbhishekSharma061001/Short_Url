const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        await User.create({ name, email, password });
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: "Email already exists" });
        }
        return res.status(500).json({ error: "Failed to create user" });
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = setUser(user);
        res.cookie("token", token);
        return res.json({ message: "Login successful", token });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};

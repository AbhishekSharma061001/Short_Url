const express = require("express");
const { handleGenerateNewShortUrl, handleGenerateAnalytics } = require("../controllers/urlControllers");
const URL = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const allUrls = await URL.find({ createdBy: req.user._id });
        return res.json(allUrls);
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
});

router.post("/", handleGenerateNewShortUrl);

router.get("/analytics/:shortId", handleGenerateAnalytics);

module.exports = router;

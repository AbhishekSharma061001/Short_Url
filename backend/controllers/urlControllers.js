const { nanoid } = require("nanoid");
const URL = require("../models/url.js");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.URL) {
        return res.status(400).json({ error: "URL is required" });
    }
    try {
        const shortId = nanoid(8);
        await URL.create({
            shortId,
            redirectURL: body.URL,
            visitHistory: [],
            createdBy: req.user._id,
        });
        return res.status(201).json({ shortId, shortURL: `http://localhost:8000/${shortId}` });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create short URL" });
    }
}

async function handleGenerateAnalytics(req, res) {
    const shortId = req.params.shortId;
    try {
        const result = await URL.findOne({ shortId });
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGenerateAnalytics,
};

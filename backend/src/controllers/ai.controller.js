const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body?.code; // safe access

        if (!code) {
            return res.status(400).json({ error: "Code is required" });
        }

        const response = await aiService(code);

        res.json({ review: response });
    } catch (err) {
        console.error("Error in getReview:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

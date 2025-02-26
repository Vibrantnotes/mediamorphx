const axios = require('axios');

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    const videoUrl = req.query.video;

    if (!videoUrl) {
        return res.status(400).json({ error: "Video URL is required" });
    }

    try {
        const response = await axios.get(`https://mediamorphx.vercel.app/get?video=${videoUrl}`);
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching video data:", error.message);
        res.status(500).json({ error: "Failed to fetch video data" });
    }
}

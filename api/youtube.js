import axios from 'axios';

export default async function handler(req, res) {
    const { video } = req.query;

    if (!video) {
        return res.status(400).json({ error: "No video link provided" });
    }

    try {
        const ytInfoUrl = `https://mediamorphx.vercel.app/get?video=${video}`;
        const response = await axios.get(ytInfoUrl);

        if (response.status === 200) {
            res.status(200).json(response.data);
        } else {
            res.status(500).json({ error: "Failed to fetch video data" });
        }
    } catch (error) {
        console.error("Error fetching video data:", error.message);
        res.status(500).json({ error: "Error fetching video data" });
    }
}

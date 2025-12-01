const express = require('express');
const { getEurostatGDP } = require('../services/eurostatService');

const eurostatRouter = express.Router();

eurostatRouter.get("/gdp", async (req, res) => {
    try {
        const data = await getEurostatGDP();
        res.json(data);
    } catch (error) {
        console.error("Eurostat error:", error.message);
        res.status(500).json({ error: "Eurostat GDP fetch failed" });
    }
});

module.exports = {
    eurostatRouter,
};
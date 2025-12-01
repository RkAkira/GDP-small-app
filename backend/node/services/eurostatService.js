const axios = require("axios");

const PYTHON_API = process.env.PYTHON_API || "http://localhost:5000"

async function getEurostatGDP(){
    const response = await axios.get(`${PYTHON_API}/eurostat/gdp`);
    return response.data;
}

module.exports = {
    getEurostatGDP,
};
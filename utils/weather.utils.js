const axios = require('axios').default;

const getWeather = (lat = 0, lon = 0) => {
    const apiKey = process.env.WEATHER_API_KEY;
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${apiKey}`);
}

module.exports = getWeather;

const { request, response } = require("express");
const dateParser = require("../utils/dateParser.util");
const getWeather = require("../utils/weather.utils");

const weatherController = async (req = request, res = response) => {
    const lat = req.query.lat;
    const lon = req.query.lon;
    // console.log({ lat, lon});
    let resp;
    let data;
    try {
        resp = await getWeather(lat, lon);
        data = resp.data;
    } catch (error) {
        return res.status(500).json({message: 'Error en la consulta'});
    }
    const { hourly } = data;
    const first6 = hourly.slice(0, 6);
    const datos = first6.map(forecast=> {
        return {
            hora: dateParser(forecast.dt),
            temperatura: forecast.temp,
            sensacionTermica: forecast.feels_like,
            presion: forecast.pressure,
            humedad: forecast.humidity,
            nubes: forecast.clouds,
            visibilidad: forecast.visibility,
            velocidadViento: forecast.wind_speed,
            descripcion: forecast.weather[0].description
        }
    })

    return res.json({message: 'ok', datos});
}

module.exports = weatherController;

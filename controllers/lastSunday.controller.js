const { request, response } = require("express");
const getLastSundays = require("../utils/lastSunday.util");


const lastSundayController = (req = request, res = response) => {
    const fechaInicial = req.query.fechaInicial;
    const fechaFinal = req.query.fechaFinal;

    const domingos = getLastSundays(fechaInicial, fechaFinal);

    if (domingos === null) return res.status(400).json({
        message: 'Formato de fechas inválido'
    });

    return res.json({
        message: 'ok', domingos
    })
}

module.exports = lastSundayController;

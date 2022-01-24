const { request, response } = require("express");
const getBisiesto = require("../utils/getBisiesto");

const getBisiestoController = (req = request, res = response) => {
    const inicio = Number(req.query.inicio || 0);
    const final = Number(req.query.final || 0);

    const bisiestos = getBisiesto(inicio, final);

    return res.json({
        message: 'ok', bisiestos
    })
}


module.exports = getBisiestoController

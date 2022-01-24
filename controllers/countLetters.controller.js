const { request, response } = require("express");
const countLetters = require('../utils/countLetters.utils');

const countLetterController = (req = request, res = response) => {
    const texto = req.query.texto;
    if (!texto) return res.status(400).json({message: 'proporcione un texto'});
    const letters = countLetters(texto);
    return res.json({
        message: 'ok',
        letters
    })
}

module.exports = countLetterController;


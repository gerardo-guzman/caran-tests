const { request, response } = require("express");
const crazyMatrix = require("../utils/matrix.util");

const matrixController = (req = request, res = response) => {
    const n = Number(req.query.n || 0);
    const rotate = req.query.rotate.split(',').map(rotates => Number(rotates || 0));
    const coords = req.query.coords.split(',').map(coord => Number(coord || 0));
    let resp;
    try {
        resp = crazyMatrix(n, rotate, coords);
    } catch (error) {
        const message = error.message || 'Error en la matriz';
        return res.status(400).json({ message });
    }
    return res.json({
        message: 'ok', resp
    })
}

module.exports = matrixController;

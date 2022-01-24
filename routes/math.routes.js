const { Router } = require("express");
const matrixController = require("../controllers/matrix.controller");

const mathRoutes = Router();

mathRoutes.get('/matrix', matrixController);

module.exports = mathRoutes;

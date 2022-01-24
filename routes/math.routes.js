const { Router } = require("express");
const countLetterController = require("../controllers/countLetters.controller");
const matrixController = require("../controllers/matrix.controller");

const mathRoutes = Router();

mathRoutes.get('/matrix', matrixController);
mathRoutes.get('/letters', countLetterController);

module.exports = mathRoutes;

const { Router } = require("express");
const getBisiestoController = require("../controllers/getBisiesto.controller");
const lastSundayController = require("../controllers/lastSunday.controller");


const dateRoutes = Router();

dateRoutes.get('/lastSundays', lastSundayController);
dateRoutes.get('/bisiestos', getBisiestoController);


module.exports = dateRoutes;


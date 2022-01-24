const { Router } = require("express");
const lastSundayController = require("../controllers/lastSunday.controller");


const dateRoutes = Router();

dateRoutes.get('/lastSundays', lastSundayController);


module.exports = dateRoutes;


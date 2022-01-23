const { Router } = require("express");
const weatherController = require("../controllers/weather.controller");

const weatherRoutes = Router();

weatherRoutes.get('', weatherController);

module.exports = weatherRoutes;


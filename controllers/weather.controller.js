const { request, response } = require("express");

const weatherController = async (req = request, res = response) => {
    return res.json({message: 'ok'});
}

module.exports = weatherController;

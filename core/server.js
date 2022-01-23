const express = require("express");
const cors = require('cors');
const weatherRoutes = require("../routes/weather.routes");

class ServerCore {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.connectDB();
        this.middleWares();
        this.routes();
    }

    middleWares() {
        // used middlewares!
        this.app.use(cors());
        this.app.use(express.json());
    }

    async connectDB() {

    }

    routes() {
        // the crazy routes
        this.app.use('/api/v1.0/weather', weatherRoutes);
    }

    listen() {
        // Ha-ha just setting up the server
        this.connection = this.app.listen(this.port, () => {
            console.log(`Listen on ${this.port}`);
        });
    }

    stop() {
        // Stop manually the server for unit testing porposes
        return new Promise((resolve, reject) => {
            if (!this.connection) resolve(true);
            this.connection.close((err) => {
                if (err) reject(err);
                resolve(true);
            });
        })
    }
}

module.exports = ServerCore;

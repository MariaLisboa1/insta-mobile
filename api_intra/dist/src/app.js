"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const bodyParser = require("body-parser");
let swaggerJSDoc = require('swagger-jsdoc');
const routes_1 = require("./routes");
class App {
    constructor() {
    }
    swaggerConfig() {
        let swaggerDefinition = {
            info: {
                title: 'Doc Api Intranet',
                version: '1.0.0',
                description: 'Documentação para facilitar o entendimento da api'
            },
            host: '10.0.4.70',
            basePath: '/api',
        };
        let options = {
            swaggerDefinition: swaggerDefinition,
            apis: ['./routes/comprador.route.js', './routes/index.js']
        };
        this.swaggerSpec = swaggerJSDoc(options);
    }
    middleware() {
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use("/api", routes_1.default);
        this.express.get('/swagger.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(this.swaggerSpec);
        });
    }
}
exports.default = new App().express;

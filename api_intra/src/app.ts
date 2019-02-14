import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
let swaggerJSDoc = require('swagger-jsdoc');

import Routes from './routes';

class App {
    public express: express.Application;
    public swaggerSpec;

    constructor(){

    }

    private swaggerConfig(): void {
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
            apis: ['./routes/comprador.route.js','./routes/index.js']
        };

        this.swaggerSpec = swaggerJSDoc(options);
    }

    private middleware(): void {
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use("/api", Routes);
        this.express.get('/swagger.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(this.swaggerSpec);
        })
    }
}

export default new App().express;
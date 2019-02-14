"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ModelsInterface_1 = require("../interfaces/ModelsInterface");
let Router = express.Router();
//ROTAS
// Router.use('/comprador', User);
let App = express();
Router.get('/users', (req, resp, next) => {
    ModelsInterface_1.User.findAll().then(users => {
        resp.json(users);
        return next();
    });
});
Router.get('/users/:id', (req, resp, next) => {
    ModelsInterface_1.User.findById(req.params.id).then(user => {
        if (user) {
            resp.json(user);
            return next();
        }
        resp.send(404);
        return next();
    });
});
exports.default = Router;

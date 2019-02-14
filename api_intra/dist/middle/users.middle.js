"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ModelsInterface_1 = require("../interfaces/ModelsInterface");
let Router = express.Router();
let App = express();
Router.get('/users', (req, resp, next) => {
    ModelsInterface_1.User.findAll().then(users => {
        resp.json(users);
        return next();
    });
    resp.json({ message: 'Funcionando!' });
});
App.get('/', Router);
// application.get('/users', (req, resp, next)=>{
//     User.findAll().then(users=>{
//      resp.json(users)
//      return next()
//     })

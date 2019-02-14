"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let Router = express.Router();
let App = express();
// Router.get('/users', (req, res, next) => {
//     res.json({message: 'olá'})    
// })
Router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
App.use('/', Router);
// application.get('/users', (req, resp, next)=>{
//     User.findAll().then(users=>{
//      resp.json(users)
//      return next()
//     })

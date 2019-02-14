"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let Router = express.Router();
Router.get('/users', (req, resp, next) => {
    console.log('ola');
});
// application.get('/users', (req, resp, next)=>{
//     User.findAll().then(users=>{
//      resp.json(users)
//      return next()
//     })

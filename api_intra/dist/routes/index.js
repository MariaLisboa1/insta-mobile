"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import { User } from '../interfaces/ModelsInterface';
// import db from '../models/index'
let Router = express.Router();
const Montagem_route_1 = require("./Montagem.route");
Router.use('/montadores', Montagem_route_1.default);
exports.default = Router;
//ROTAS
// Router.use('/comprador', User);
//AQUI QUE TA FUNCIONANDO AS ROTAS
// db.RetornoMontagem.findAll({
//     where:{
//         COD_TEC: '00000000000019',
//         status: 'active'
//     }
//  })
//  Router.get('/users', (req, resp,next)=>{
//     db.RetornoMontagem.findAll().then(users=>{
//         resp.json(users)
//         return next()
//     })
//  })
// Router.get('/users', (req, resp, next) => {
//     User.findAll().then(users=>{
//         resp.json(users)
//         return next()
//     })
// });
// Router.get('/users/:id', (req, resp, next)=>{
//     User.findById(req.params.id).then(user=>{        
//         if (user) {
//             resp.json(user)
//             return next()
//         }
//         resp.send(404)
//         return next()
//     })
// })
// export default Router;
// SELECT * FROM RetornoMontagem	
// 	WHERE COD_TEC = '00000000000019'

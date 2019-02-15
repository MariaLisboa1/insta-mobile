"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("../models/index");
const utils_1 = require("../utils/utils");
let Router = express.Router();
// console.log(db.Montador);
// Router.get('/users', (req, resp) => {    
//     db.Montador.findOne({
//         where: {
//             COD_TEC: '00000000000014'
//         }
//     })
// })
// Router.get('/users', (req, resp) => {    
//     db.Montador.findAll()  
//         .then((value: [MontadorInstance]) => {
//             if (value.length > 0) {
//                 resp.status(200).send(value)
//             } else {
//                 resp.status(200).json([])
//             }
//         }).catch(handleError)
// })
Router.get('/users', (req, resp, next) => {
    index_1.default.Montador.findAll({
        where: {
            COD_TEC: '00000000000014'
        }
    }).then((value) => {
        if (value.length > 0) {
            resp.status(200).send(value);
            return next();
        }
        else {
            resp.status(200).json([]);
            return next();
        }
    }).catch(utils_1.handleError);
});
Router.get('/users/:id', (req, resp, next) => {
    let id = req.params.id;
    if (req.param('campo')) {
        let campos = req.param('campo').split(',');
        index_1.default.Montador.findById(id, { attributes: campos })
            .then((value) => {
            if (value) {
                resp.status(200).send(value);
            }
            else {
                resp.status(404).json({ message: 'Montador not found' });
            }
        })
            .catch(utils_1.handleError);
    }
    // db.Montador.findById(req.params.id).then()
});
exports.default = Router;
// where:{
//     COD_TEC: '00000000000019',
//     status: 'active'
// }
// where: {
//     *     attr1: 42,
//     *     attr2: 'cake'
//     *   }

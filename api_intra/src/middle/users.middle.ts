import * as express from 'express';
import { User } from '../interfaces/ModelsInterface';

let Router = express.Router();

Router.get('/users', (req, resp, next) => {
    console.log('ola');
    
})

// application.get('/users', (req, resp, next)=>{
//     User.findAll().then(users=>{
//      resp.json(users)
//      return next()
//     })
import * as express from 'express';
import { User } from '../interfaces/ModelsInterface';

let Router = express.Router();

//ROTAS
// Router.use('/comprador', User);

let App = express()

Router.get('/users', (req, resp, next) => {
    User.findAll().then(users=>{
        resp.json(users)
        return next()
    })
});

Router.get('/users/:id', (req, resp, next)=>{
    User.findById(req.params.id).then(user=>{
        if (user) {
            resp.json(user)
            return next()
        }

        resp.send(404)
        return next()
    })
})

export default Router;
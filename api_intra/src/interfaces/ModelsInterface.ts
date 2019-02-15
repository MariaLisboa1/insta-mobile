import { MontadorModel } from "../models/RetornoMontagemMode";

export interface ModelsInterface {
    Montador: MontadorModel;
}





/*const users = [
    {id: '1', name: 'Peter Parker', email: 'peter@marvel.com'},
    {id: '2', name: 'Bruce Wayne', email: 'bruce@dc.com'}
]


// SELECT * FROM RetornoMontagem	
// 	WHERE COD_TEC = '00000000000019'
import * as express from 'express';

import db from '../models/index';


// db.RetornoMontagem.findAll({
//     where:{
//         COD_TEC: '00000000000019',
//         status: 'active'
//     }
// })


export class User {
    // static findAll(): Promise<any[]>{
    //     return Promise.resolve(users)
    // }

    static findAll(): Promise<any[]>{
        return
    }

    static findById(id: string): Promise<any> {
        return new Promise(resolve=>{
            const filtered = users.filter(user=> user.id === id)
            let user = undefined
            if (filtered.length > 0) {
                user = filtered[0]
            }
            resolve(user)
        })
    }


}
*/


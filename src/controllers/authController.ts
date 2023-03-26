import { Request, Response } from "express";
// import pool from "../database";
import jwt from 'jsonwebtoken';

import { Cliente } from "../models/Cliente";

class AuthController {

    public async registro(req: Request, res: Response){
        const {nombre, apellido, email, password} = req.body;
        const newCliente = await Cliente.create({
            nombre,
            apellido,
            email,
            password
        });
        const token = jwt.sign({_id: newCliente.id}, 'secretkey');
        res.status(200).send({
            token,
            text: "Registro Exitoso"
        });
    }


    public async login(req: Request, res: Response, next: any){
        const { email, password } = req.body; 
        
        if(!email || !password){
            res.status(500).send({
                text: "Es necesario usuario y password para loguearse"
            })
        }else{
            const result = await Cliente.findOne({
                where: {
                    email: email,
                    password: password
                }
        });

        if(result?.dataValues){                
            const token = jwt.sign({_id: result.dataValues.id}, 'secretkey');
            //poner secretKey en una variable de .env
            jwt.verify(token, 'secretkey', (err, _user) => {
                if(err){
                    res.status(500).send('Token denegado');
                }else{                    
                    next();
                }
            });
            res.status(200).send({
                text: "Usuario logueado con exito",
                token: token
            })
        }else{
            res.status(500).send({
                text: "Usuario o password invalidos"
            })

        }
        }
        
        // const [rows] = await pool.query('SELECT * FROM clientes WHERE email = ?', [email]);

        
    }
}


export const authController = new AuthController();
export default authController;


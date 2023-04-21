import { Request, Response } from "express";
// import pool from "../database";
import jwt from 'jsonwebtoken';

import { Cliente } from "../models/Cliente";

class AuthController {

    public async registro(req: Request, res: Response){
        const {nombre, apellido, email, password} = req.body;
        const newCliente = await Cliente.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password
        });

        const clienteExiste = await Cliente.findOne({
            where: {
                email: email
            }
        })
        
        if  (newCliente.dataValues.email === clienteExiste?.dataValues.email){
            res.status(500).send({
                text: "El usuario ya existe"
            })
        } else {
            const token = jwt.sign({_id: newCliente.dataValues.id}, 'secretkey');
            res.status(200).send({
                token:token,
                text: "Registro Exitoso"
            });
        }
           
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
                token: token,
                id: result.dataValues.id
            })
        }else{
            res.status(500).send({
                text: "Usuario o password invalidos"
            })
        }
    }}
}


export const authController = new AuthController();
export default authController;


import { Request, Response } from "express";
import pool from "../database";
import jwt from 'jsonwebtoken';

class AuthController {

    public async registro(req: Request, res: Response){
        const cliente = await pool.query('INSERT INTO clientes SET ?', [req.body]);
        const token = jwt.sign({_id: cliente.id}, 'secretkey');

        res.status(200).json({token});

        res.json({
            text: "Registro Exitoso"
        })
    }

    public async login(req: Request, res: Response, next: any){
        const { email, password } = req.body; 
        const [rows] = await pool.query('SELECT * FROM clientes WHERE email = ?', [email]);
        const result = JSON.parse(JSON.stringify(rows));
    
        if(result.length > 0){
            if(result[0].email === email && result[0].password === password){
                
                const token = jwt.sign({_id: result[0].id}, 'secretkey');
                
                jwt.verify(token, 'secretkey', (err, _user) => {
                    if(err){
                        res.send('Token denegado');
                    }else{
                        next();
                    }
                   
                });
                res.send({
                    text: "Usuario logueado con exito",
                    token: token
                })
            }else{
                res.json({
                    text: "Usuario o password invalidos"
                })
            }
        }
    }
}


export const authController = new AuthController();
export default authController;


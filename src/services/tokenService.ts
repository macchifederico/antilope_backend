import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

class TokenService {

    constructor(){

    }
    
    verifyToken(req: Request, res: Response, next: any){
        
        if(!req.headers.authorization){
            return res.status(401).send('Request no autorizado');
        }

        const token = req.headers.authorization.split(' ')[1];

        if(token === 'null'){
                return res.status(401).send('Request no autorizado');
        }
        
        // const tokenTime = req._startAt[0]; 
        // if(tokenTime === 0){
        //     return res.status(401).send('Request no autorizado, token vencido')
        // }

        const payload = jwt.verify(token, 'secretkey');
        console.log(payload);
        
        req.userId = payload._id;
        next();
        }
    
}

export const tokenService = new TokenService();
export default tokenService;

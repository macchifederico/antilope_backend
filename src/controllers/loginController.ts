import { Request, Response } from "express";
import pool from '../database'

class LoginController {

    public index (req: Request, res: Response){
        res.json({
            text: 'loginController'
        })
        
    }
}

export const loginController = new LoginController();
export default loginController;
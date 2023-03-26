import { Request, Response } from "express";
import pool from '../database';
//no utilizado
class HomeController {

    public index (req: Request, res: Response){
        res.json({
            text: 'homeController',
            
        })
    }
}


export const homeController = new HomeController();
export default homeController;

import { Request, Response } from "express";
import pool from '../database';

class HomeController {

    public index (req: Request, res: Response){
        res.json({
            text: 'homeController',
            id: req.userId
        })
    }
}


export const homeController = new HomeController();
export default homeController;

import { Request, Response } from "express";
import pool from '../database';

class IndexController {

    public index (req: Request, res: Response){
        res.json({
            text: 'indexController'
        })
    }
}

export const indexController = new IndexController();
export default indexController;
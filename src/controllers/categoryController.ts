import { Request, Response } from "express";
import pool from '../database';

class CategoryController {
//sacar de aca
    public async list (req: Request, res: Response){
        const [rows] = await pool.query('SELECT * FROM categorias');        
        return res.json(rows);
    }
}

const categoryController = new CategoryController();
export default categoryController;
import { Request, Response } from "express";
import { Sucursal } from "../models/Sucursal";

class SucursalesController{

    public async list (req: Request, res: Response){
        const sucursales = await Sucursal.findAll();        
        res.json(sucursales)
    }

    // public async getOne (req: Request, res: Response): Promise<any>{
    //     const { id } = req.params;
    //     const producto = await Producto.findAll({where: {id: id}})
    //     if(producto.length >  0){
    //         return res.json(producto);
    //     }
    //     res.json({
    //         text: "El producto no existe"
    //     })
    // }

    // public async create (req: Request, res: Response): Promise<void> {
    //     await pool.query('INSERT INTO productos SET ?', [req.body]);
    //     res.json({
    //         text: "Producto Guardado OK"
    //     })
    // }
    
    // public async update (req: Request, res: Response): Promise<void>{
    //     const { id } = req.params;
    //     console.log(id);
    //     console.log(req.body);
        
    //     await pool.query('UPDATE productos SET ? WHERE id = ?', [req.body, id]);
    //     res.json({
    //         text: "Producto Actualizado OK"
    //     })
    // }

    // public async delete (req: Request, res: Response): Promise<void>{
    //     const { id } =  req.params;
    //     await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    //     res.json({
    //         text: "Producto Borrado OK"
    //     })
    // }
}
 
export const sucursalesController = new SucursalesController();
export default sucursalesController;
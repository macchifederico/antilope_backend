import { Request, Response } from "express";
import pool from '../database';

import { Carrito } from "../models/Carrito";

class CarritoController{

    public async list (req: Request, res: Response){
        //[rows] se usa para obtener el dato sin la conf de la bbdd
        const userId= req.userId;
        // return await pool.query('SELECT * FROM carrito WHERE id = ?', userId);
        const productosEnCarrito = await Carrito.findAll({where: {id_cliente: userId}})
        return res.json(productosEnCarrito);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const id_cliente = req.userId;
        const {cantidad, precio_unitario, finalizado, marca, descripcion, img, categoria} = req.body;
        const productoAgregado = await Carrito.create({
            id_cliente,
            cantidad,
            precio_unitario,
            marca,
            img,
            categoria,
            descripcion,
            finalizado
        });
        
        res.json({
            text: "Producto Guardado OK"
        })
    }
    
    // public async update (req: Request, res: Response): Promise<void>{
    //     const { id } = req.params;
    //     console.log(id);
    //     console.log(req.body);
    // }        
    //     await pool.query('UPDATE productos SET ? WHERE id = ?', [req.body, id]);
    //     res.json({
    //         text: "Producto Actualizado OK"
    //     })
    // }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } =  req.params;
        const id_cliente = req.userId;

        const productoBorrado = await Carrito.destroy({
            where: {
                id: id,
                id_cliente: id_cliente
            }
        });
        res.json({
            text: "Producto borrado con éxito"
        })        
    }

}
 
export const carritoController = new CarritoController();
export default carritoController;

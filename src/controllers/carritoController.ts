import { Request, Response } from "express";

import { Carrito } from "../models/Carrito";
import { Cliente } from "../models/Cliente";

class CarritoController{

    public async list (req: Request, res: Response){
        const userId= req.userId;
        const productosEnCarrito = await Carrito.findAll({
            where: {id_cliente: userId}
        })
        return res.json(productosEnCarrito);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const id_cliente = req.userId;
        
        const {precio, marca, descripcion, img, categoriaId} = req.body;

        await Carrito.create({
            id_cliente: id_cliente,
            precio_unitario: precio,
            marca:  marca,
            img: img,
            categoria: categoriaId,
            descripcion: descripcion,
            finalizado: 0,
            cantidad: 1 //aca tengo que obtener la cantidad del front
        });
        
        res.status(200).json({
            text: "Producto Guardado OK"
        })
    }
    
    // public async update (req: Request, res: Response): Promise<void>{
    //     const id_cliente = req.userId;
    //     const {opcion} = req.body;
        
    //     if(opcion != 0){
           
    //     }
    // }

    public async delete (req: Request, res: Response): Promise<void>{
        
        const { id } =  req.params;
        const id_cliente = req.userId;
        //console.log(id + " " + id_cliente);
        
        await Carrito.destroy({
            where: {
                id: id,
                id_cliente: id_cliente
            }
        });
        res.status(200).send({
            text: "Producto borrado con éxito"
        })        
    }

    public async deleteAll (req: Request, res: Response): Promise<void>{
        const id_cliente = req.userId;
        await Carrito.destroy({
            where: {
                id_cliente: id_cliente
            }
        });
        res.status(200).send({
            text: "Carrito borrado con éxito"
        })        
    }

    public async updateEstado(req: Request, res: Response){
        const id = req.userId;
        const {seleccion} = req.body;
        await Carrito.update({
            finalizado: 1,
        },
        {
            where: {
                id_cliente: id
            }
        });
        return res.json({
            text: "Carrito finalizado con éxito"
        })
    }

}
 
export const carritoController = new CarritoController();
export default carritoController;

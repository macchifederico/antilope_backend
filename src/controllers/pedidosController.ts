import { Request, Response } from 'express';
import { Carrito } from '../models/Carrito';
import { Pedido } from '../models/Pedido';
import { Cliente } from '../models/Cliente';
import { Sucursal } from '../models/Sucursal';

class PedidoController {
    
    public async create(req: Request, res: Response){        
        const idCliente = req.userId;
        const seleccion = req.body;        

        if (seleccion.id == null){
            return res.status(400).json({
                ok: false,
                text: 'Seleccione un metodo de envio.'
            });
        }

        const carrito = await Carrito.findOne({ 
                                where: {id_cliente: idCliente},
                                
                            });

        const cliente = await Cliente.findOne({ 
                                attributes: ['id','nombre', 'apellido','telefono', 'direccion'],
                                where: {id: idCliente} 
                            });
        const sucursal_entrega = await Sucursal.findOne({ where: {id: seleccion.id} });

        await Carrito.update({
            finalizado: 1
        },
        {
            where: {id_cliente: idCliente}
        });
        // pc=pendiente cobro, ec=en curso, f=finalizado, c=cancelado
        await Pedido.create({
            id_carrito: carrito?.dataValues.id,
            id_cliente: cliente?.dataValues.id,
            nombre_cliente: cliente?.dataValues.nombre,
            apellido_cliente: cliente?.dataValues.apellido,
            telefono_cliente: cliente?.dataValues.telefono,
            sucursal_entrega: sucursal_entrega?.dataValues.nombre,
            estado_pedido: 'PC',
            fecha_pedido: new Date(),
            fecha_estimada_entrega: new Date(),
        })

        if (seleccion.id != 7){
            await Pedido.update({
                    sucursal_entrega: sucursal_entrega?.dataValues.nombre,
                    direccion_envio: sucursal_entrega?.dataValues.direccion,
                },
                {
                    where: {
                        id_cliente: idCliente 
                    }
                }
            );
        }else{
            await Pedido.update({
                direccion_envio: cliente?.dataValues.direccion,
            },
            {
                where: {
                    id_cliente: idCliente 
                }
            }
        );
        }
        
        
        return res.status(200).json({
            ok: true,
            text: `Pedido creado correctamente`
        }); 
    
       
    }

    public async getPedido(req: Request, res: Response){
        const idCliente = req.userId;

        const pedido = await Pedido.findOne({
            where: {id_cliente: idCliente}
        })
        
        if(pedido){
            return res.status(200).json({
                ok: true,
                pedido: pedido
            })
        }else{
            return res.status(400).json({
                ok: false,
                pedido: pedido
            })
        }
        
    }
}
export const pedidosController = new PedidoController();
export default pedidosController;
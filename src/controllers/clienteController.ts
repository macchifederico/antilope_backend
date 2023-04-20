import { Request, Response } from "express";
import { Cliente } from "../models/Cliente";

class ClienteController {

    public async getOneCliente (req: Request, res: Response){
        const idCliente = req.userId;
        
        const infoCliente = await Cliente.findOne({where: {id: idCliente}});        
        return res.json(infoCliente?.dataValues)        
    }

    public async updateOneCliente (req: Request, res: Response){
        const idCliente = req.userId;        
        const {nombre, apellido, telefono, email, dni, direccion, codPostal} = req.body;
        
        await Cliente.update({
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            dni: dni,
            codigoPostal: codPostal,
            direccion: direccion
        },
        {
            where: {id: idCliente}
        });
        res.status(200).json({
            text: "Actualizacion realizada con exito"
        })
    }
}

const clienteController = new ClienteController();
export default clienteController;
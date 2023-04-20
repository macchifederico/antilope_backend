"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../models/Cliente");
class ClienteController {
    async getOneCliente(req, res) {
        const idCliente = req.userId;
        const infoCliente = await Cliente_1.Cliente.findOne({ where: { id: idCliente } });
        return res.json(infoCliente?.dataValues);
    }
    async updateOneCliente(req, res) {
        const idCliente = req.userId;
        const { nombre, apellido, telefono, email, dni, direccion, codPostal } = req.body;
        await Cliente_1.Cliente.update({
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            dni: dni,
            codigoPostal: codPostal,
            direccion: direccion
        }, {
            where: { id: idCliente }
        });
        res.status(200).json({
            text: "Actualizacion realizada con exito"
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;

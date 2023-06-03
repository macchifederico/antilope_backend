"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoController = void 0;
const Carrito_1 = require("../models/Carrito");
class CarritoController {
    async list(req, res) {
        const userId = req.userId;
        const productosEnCarrito = await Carrito_1.Carrito.findAll({
            where: { id_cliente: userId }
        });
        return res.json(productosEnCarrito);
    }
    async create(req, res) {
        const id_cliente = req.userId;
        const { precio, marca, descripcion, img, categoriaId } = req.body;
        await Carrito_1.Carrito.create({
            id_cliente: id_cliente,
            precio_unitario: precio,
            marca: marca,
            img: img,
            categoria: categoriaId,
            descripcion: descripcion,
            finalizado: 0,
            cantidad: 1 //aca tengo que obtener la cantidad del front
        });
        res.status(200).json({
            text: "Producto Guardado OK"
        });
    }
    async update(req, res) {
        const { opcion } = req.body;
        console.log(req.params);
        // if(opcion != 0){
        //     await Carrito.update({
        //     })
        // }
    }
    async delete(req, res) {
        const { id } = req.params;
        const id_cliente = req.userId;
        //console.log(id + " " + id_cliente);
        await Carrito_1.Carrito.destroy({
            where: {
                id: id,
                id_cliente: id_cliente
            }
        });
        res.status(200).send({
            text: "Producto borrado con éxito"
        });
    }
    async deleteAll(req, res) {
        const id_cliente = req.userId;
        await Carrito_1.Carrito.destroy({
            where: {
                id_cliente: id_cliente
            }
        });
        res.status(200).send({
            text: "Carrito borrado con éxito"
        });
    }
}
exports.carritoController = new CarritoController();
exports.default = exports.carritoController;

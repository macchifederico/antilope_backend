"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidosController = void 0;
const Carrito_1 = require("../models/Carrito");
const Pedido_1 = require("../models/Pedido");
const Cliente_1 = require("../models/Cliente");
const Sucursal_1 = require("../models/Sucursal");
class PedidoController {
    async create(req, res) {
        const idCliente = req.userId;
        const seleccion = req.body;
        if (seleccion.id == null) {
            return res.status(400).json({
                ok: false,
                text: 'Seleccione un metodo de envio.'
            });
        }
        const carrito = await Carrito_1.Carrito.findOne({
            where: { id_cliente: idCliente },
        });
        const cliente = await Cliente_1.Cliente.findOne({
            attributes: ['id', 'nombre', 'apellido', 'telefono', 'direccion'],
            where: { id: idCliente }
        });
        const sucursal_entrega = await Sucursal_1.Sucursal.findOne({ where: { id: seleccion.id } });
        await Carrito_1.Carrito.update({
            finalizado: 1
        }, {
            where: { id_cliente: idCliente }
        });
        // pc=pendiente cobro, ec=en curso, f=finalizado, c=cancelado
        await Pedido_1.Pedido.create({
            id_carrito: carrito?.dataValues.id,
            id_cliente: cliente?.dataValues.id,
            nombre_cliente: cliente?.dataValues.nombre,
            apellido_cliente: cliente?.dataValues.apellido,
            telefono_cliente: cliente?.dataValues.telefono,
            sucursal_entrega: sucursal_entrega?.dataValues.nombre,
            estado_pedido: 'PC',
            fecha_pedido: new Date(),
            fecha_estimada_entrega: new Date(),
        });
        if (seleccion.id != 7) {
            await Pedido_1.Pedido.update({
                sucursal_entrega: sucursal_entrega?.dataValues.nombre,
                direccion_envio: sucursal_entrega?.dataValues.direccion,
            }, {
                where: {
                    id_cliente: idCliente
                }
            });
        }
        else {
            await Pedido_1.Pedido.update({
                direccion_envio: cliente?.dataValues.direccion,
            }, {
                where: {
                    id_cliente: idCliente
                }
            });
        }
        return res.status(200).json({
            ok: true,
            text: `Pedido creado correctamente`
        });
    }
    async getPedido(req, res) {
        const idCliente = req.userId;
        const pedido = await Pedido_1.Pedido.findOne({
            where: { id_cliente: idCliente }
        });
        if (pedido) {
            return res.status(200).json({
                ok: true,
                pedido: pedido
            });
        }
        else {
            return res.status(400).json({
                ok: false,
                pedido: pedido
            });
        }
    }
}
exports.pedidosController = new PedidoController();
exports.default = exports.pedidosController;

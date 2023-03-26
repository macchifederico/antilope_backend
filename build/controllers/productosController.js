"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosController = void 0;
const Producto_1 = require("../models/Producto");
class ProductosController {
    async list(req, res) {
        const productos = await Producto_1.Producto.findAll();
        res.json(productos);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const producto = await Producto_1.Producto.findAll({ where: { id: id } });
        if (producto.length > 0) {
            return res.json(producto);
        }
        res.json({
            text: "El producto no existe"
        });
    }
}
exports.productosController = new ProductosController();
exports.default = exports.productosController;

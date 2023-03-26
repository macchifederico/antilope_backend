"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoController = void 0;
const Carrito_1 = require("../models/Carrito");
class CarritoController {
    async list(req, res) {
        //[rows] se usa para obtener el dato sin la conf de la bbdd
        const userId = req.userId;
        // return await pool.query('SELECT * FROM carrito WHERE id = ?', userId);
        const productosEnCarrito = await Carrito_1.Carrito.findAll({ where: { id_cliente: userId } });
        return res.json(productosEnCarrito);
    }
    async create(req, res) {
        const id_cliente = req.userId;
        const { cantidad, precio_unitario, finalizado, marca, descripcion, img, categoria } = req.body;
        const productoAgregado = await Carrito_1.Carrito.create({
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
        });
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
    async delete(req, res) {
        const { id } = req.params;
        const id_cliente = req.userId;
        const productoBorrado = await Carrito_1.Carrito.destroy({
            where: {
                id: id,
                id_cliente: id_cliente
            }
        });
        res.json({
            text: "Producto borrado con éxito"
        });
    }
}
exports.carritoController = new CarritoController();
exports.default = exports.carritoController;

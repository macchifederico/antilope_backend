"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoController = void 0;
const Carrito_1 = require("../models/Carrito");
class CarritoController {
    async list(req, res) {
        const userId = req.userId;
        const productosEnCarrito = await Carrito_1.Carrito.findAll({ where: { id_cliente: userId } });
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
        console.log(id + " " + id_cliente);
        await Carrito_1.Carrito.destroy({
            where: {
                id: id,
                id_cliente: id_cliente
            }
        });
        res.status(200).json({
            text: "Producto borrado con éxito"
        });
    }
}
exports.carritoController = new CarritoController();
exports.default = exports.carritoController;

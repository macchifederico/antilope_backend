"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductosController {
    // public index(req: Request, res: Response){
    //     res.json({
    //         text: "productosController"
    //     })
    // }
    async list(req, res) {
        //[rows] se usa para obtener el dato sin la conf de la bbdd
        const [rows] = await database_1.default.query('SELECT * FROM productos');
        // console.log(rows);
        return res.json(rows);
    }
    // Esto deberia devolver un producto, por ahora dejo ANY
    async getOne(req, res) {
        const { id } = req.params;
        const producto = await database_1.default.query('SELECT * FROM productos WHERE id = ?', [id]);
        if (producto.length > 0) {
            return res.json(producto[0]);
        }
        res.json({
            text: "El producto no existe"
        });
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO productos SET ?', [req.body]);
        res.json({
            text: "Producto Guardado OK"
        });
    }
    async update(req, res) {
        const { id } = req.params;
        console.log(id);
        console.log(req.body);
        await database_1.default.query('UPDATE productos SET ? WHERE id = ?', [req.body, id]);
        res.json({
            text: "Producto Actualizado OK"
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        await database_1.default.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({
            text: "Producto Borrado OK"
        });
    }
}
exports.productosController = new ProductosController();
exports.default = exports.productosController;

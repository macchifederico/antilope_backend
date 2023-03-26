"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CategoryController {
    //sacar de aca
    async list(req, res) {
        const [rows] = await database_1.default.query('SELECT * FROM categorias');
        return res.json(rows);
    }
}
const categoryController = new CategoryController();
exports.default = categoryController;

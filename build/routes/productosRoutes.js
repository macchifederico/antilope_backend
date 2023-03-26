"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.default.list);
        this.router.get('/:id', productosController_1.default.getOne);
        // this.router.post('/', productosController.create);
        // this.router.put('/:id', productosController.update);
        // this.router.delete('/:id', productosController.delete);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;

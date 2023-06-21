"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosController_1 = __importDefault(require("../controllers/pedidosController"));
const tokenService_1 = __importDefault(require("../services/tokenService"));
class PedidosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, pedidosController_1.default.getPedido);
        this.router.post('/', tokenService_1.default.verifyToken, pedidosController_1.default.create);
    }
}
const pedidosRoutes = new PedidosRoutes();
exports.default = pedidosRoutes.router;

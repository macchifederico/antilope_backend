"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
const tokenService_1 = __importDefault(require("../services/tokenService"));
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', tokenService_1.default.verifyToken, clienteController_1.default.getOneCliente);
        this.router.put('/:id', tokenService_1.default.verifyToken, clienteController_1.default.updateOneCliente);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;

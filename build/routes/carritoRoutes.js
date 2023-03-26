"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = __importDefault(require("../controllers/carritoController"));
const tokenService_1 = __importDefault(require("../services/tokenService"));
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, carritoController_1.default.list);
        // this.router.get('/:id', carritoController.getOne);
        this.router.post('/', tokenService_1.default.verifyToken, carritoController_1.default.create);
        // this.router.put('/:id', tokenService.verifyToken,carritoController.update);
        this.router.delete('/:id', tokenService_1.default.verifyToken, carritoController_1.default.delete);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;

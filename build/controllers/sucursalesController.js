"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sucursalesController = void 0;
const Sucursal_1 = require("../models/Sucursal");
class SucursalesController {
    async list(req, res) {
        const sucursales = await Sucursal_1.Sucursal.findAll();
        res.json(sucursales);
    }
}
exports.sucursalesController = new SucursalesController();
exports.default = exports.sucursalesController;

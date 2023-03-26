"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrito = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Carrito = database_1.default.define('carritos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    precio_unitario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    marca: {
        type: sequelize_1.DataTypes.STRING
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    finalizado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});

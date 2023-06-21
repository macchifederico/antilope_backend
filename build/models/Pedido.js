"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Pedido = database_1.default.define('pedidos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_carrito: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre_cliente: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_cliente: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono_cliente: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion_envio: {
        type: sequelize_1.DataTypes.STRING
    },
    sucursal_entrega: {
        type: sequelize_1.DataTypes.STRING
    },
    estado_pedido: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_pedido: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_estimada_entrega: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    timestamps: false
});

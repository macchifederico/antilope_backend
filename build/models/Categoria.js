"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const Producto_1 = require("./Producto");
exports.Categoria = database_1.default.define('categorias', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.Categoria.hasOne(Producto_1.Producto);
Producto_1.Producto.belongsTo(exports.Categoria, {
    foreignKey: {
        name: 'id'
    }
});

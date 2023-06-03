"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Cliente = database_1.default.define('clientes', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    dni: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    esCelular: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    codigoPostal: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});

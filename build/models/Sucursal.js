"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Sucursal = database_1.default.define('sucursal', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    localidad: {
        type: sequelize_1.DataTypes.STRING
    },
    cod_postal: {
        type: sequelize_1.DataTypes.STRING
    },
    provincia: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});

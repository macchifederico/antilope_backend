"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const keys_1 = __importDefault(require("./keys"));
const sequelize = new sequelize_1.Sequelize(keys_1.default.database.database, keys_1.default.database.user, keys_1.default.database.password, {
    host: keys_1.default.database.host,
    dialect: 'mysql'
});
exports.default = sequelize;

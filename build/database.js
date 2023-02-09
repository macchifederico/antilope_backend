"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql2_1 = __importDefault(require("promise-mysql2"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql2_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(conn => {
    pool.releaseConnection(conn);
    console.log('DB connected');
});
exports.default = pool;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
// import pool from "../database";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Cliente_1 = require("../models/Cliente");
class AuthController {
    async registro(req, res) {
        const { nombre, apellido, email, password } = req.body;
        const newCliente = await Cliente_1.Cliente.create({
            nombre,
            apellido,
            email,
            password
        });
        const token = jsonwebtoken_1.default.sign({ _id: newCliente.id }, 'secretkey');
        res.status(200).send({
            token,
            text: "Registro Exitoso"
        });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(500).send({
                text: "Es necesario usuario y password para loguearse"
            });
        }
        else {
            const result = await Cliente_1.Cliente.findOne({
                where: {
                    email: email,
                    password: password
                }
            });
            if (result?.dataValues) {
                const token = jsonwebtoken_1.default.sign({ _id: result.dataValues.id }, 'secretkey');
                //poner secretKey en una variable de .env
                jsonwebtoken_1.default.verify(token, 'secretkey', (err, _user) => {
                    if (err) {
                        res.status(500).send('Token denegado');
                    }
                    else {
                        next();
                    }
                });
                res.status(200).send({
                    text: "Usuario logueado con exito",
                    token: token
                });
            }
            else {
                res.status(500).send({
                    text: "Usuario o password invalidos"
                });
            }
        }
        // const [rows] = await pool.query('SELECT * FROM clientes WHERE email = ?', [email]);
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;

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
        if (!email || !password || !nombre || !apellido) {
            return res.status(500).send({
                text: "Son necesarios todos los datos para registrarse"
            });
        }
        else {
            const clienteExiste = await Cliente_1.Cliente.findOne({
                where: {
                    email: email
                }
            });
            if (email === clienteExiste?.dataValues.email) {
                return res.status(500).send({
                    text: "El usuario ya existe"
                });
            }
            else {
                const newCliente = await Cliente_1.Cliente.create({
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password
                });
                const token = jsonwebtoken_1.default.sign({ _id: newCliente.dataValues.id }, 'secretkey');
                return res.status(200).send({
                    token: token,
                    text: "Registro Exitoso"
                });
            }
        }
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
                        res.status(500).send({
                            text: 'Token denegado'
                        });
                    }
                    else {
                        next();
                    }
                });
                res.status(200).send({
                    text: "Usuario logueado con exito",
                    token: token,
                    id: result.dataValues.id
                });
            }
            else {
                res.status(500).send({
                    text: "Usuario o password invalidos"
                });
            }
        }
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;

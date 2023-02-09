"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async registro(req, res) {
        const cliente = await database_1.default.query('INSERT INTO clientes SET ?', [req.body]);
        const token = jsonwebtoken_1.default.sign({ _id: cliente.id }, 'secretkey');
        res.status(200).json({ token });
        res.json({
            text: "Registro Exitoso"
        });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const [rows] = await database_1.default.query('SELECT * FROM clientes WHERE email = ?', [email]);
        const result = JSON.parse(JSON.stringify(rows));
        if (result.length > 0) {
            if (result[0].email === email && result[0].password === password) {
                const token = jsonwebtoken_1.default.sign({ _id: result[0].id }, 'secretkey');
                jsonwebtoken_1.default.verify(token, 'secretkey', (err, _user) => {
                    if (err) {
                        res.send('Token denegado');
                    }
                    else {
                        next();
                    }
                });
                res.send({
                    text: "Usuario logueado con exito",
                    token: token
                });
            }
            else {
                res.json({
                    text: "Usuario o password invalidos"
                });
            }
        }
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;

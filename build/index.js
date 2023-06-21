"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./database"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const carritoRoutes_1 = __importDefault(require("./routes/carritoRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const sucursalesRoutes_1 = __importDefault(require("./routes/sucursalesRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
//Importo modelos para bbdd
require("./models/Carrito");
require("./models/Categoria");
require("./models/Cliente");
require("./models/Producto");
require("./models/Sucursal");
require("./models/Pedido");
require('dotenv').config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/productos', productosRoutes_1.default);
        this.app.use('/auth', authRoutes_1.default);
        this.app.use('/home', homeRoutes_1.default);
        this.app.use('/categorias', categoryRoutes_1.default);
        this.app.use('/carrito', carritoRoutes_1.default);
        this.app.use('/cliente', clienteRoutes_1.default);
        this.app.use('/sucursales', sucursalesRoutes_1.default);
        this.app.use('/pedido', pedidosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en', this.app.get('port'));
        });
    }
    async startDB() {
        try {
            await database_1.default.sync({ force: false, alter: false });
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}
const server = new Server();
server.startDB();
server.start();

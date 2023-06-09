import express, {Application} from 'express';
import morgan, { format } from 'morgan';
import cors from 'cors';

import sequelize from './database' 

import indexRoutes from './routes/indexRoutes';
import loginRoutes from './routes/loginRoutes';
import productosRoutes from './routes/productosRoutes';
import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';
import categoryRoutes from './routes/categoryRoutes';
import carritoRoutes from './routes/carritoRoutes';
import clienteRoutes from './routes/clienteRoutes';
import sucursalesRoutes from './routes/sucursalesRoutes';
import pedidosRoutes from './routes/pedidosRoutes';

//Importo modelos para bbdd
import './models/Carrito';
import './models/Categoria';
import './models/Cliente';
import './models/Producto';
import './models/Sucursal';
import './models/Pedido';

require('dotenv').config();

class Server {
    
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/login', loginRoutes);
        this.app.use('/productos', productosRoutes);
        this.app.use('/auth', authRoutes);
        this.app.use('/home', homeRoutes);
        this.app.use('/categorias', categoryRoutes);
        this.app.use('/carrito', carritoRoutes);
        this.app.use('/cliente', clienteRoutes);
        this.app.use('/sucursales', sucursalesRoutes);
        this.app.use('/pedido', pedidosRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Servidor corriendo en', this.app.get('port'));
        })
    }

    async startDB(){
        try {
            await sequelize.sync({force: false, alter: false});
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
    
}

const server = new Server();
server.startDB();
server.start();

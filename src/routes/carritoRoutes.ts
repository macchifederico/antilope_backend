import { Router } from "express";
import carritoController from "../controllers/carritoController";
import tokenService from "../services/tokenService";
import pedidosController from "../controllers/pedidosController";

class CarritoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken,carritoController.list);
        // this.router.get('/:id', carritoController.getOne);
        this.router.post('/', tokenService.verifyToken, carritoController.create);
        this.router.delete('/:id',  tokenService.verifyToken, carritoController.delete);
        this.router.delete('/',  tokenService.verifyToken, carritoController.deleteAll);
        // this.router.post('/alta_pedido', tokenService.verifyToken, carritoController.altaPedido);

        // this.router.put('/', tokenService.verifyToken, carritoController.updateEstado);

    }
}

const carritoRoutes = new CarritoRoutes();
export default carritoRoutes.router;
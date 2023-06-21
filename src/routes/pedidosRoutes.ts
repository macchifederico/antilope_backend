import { Router } from "express";
import pedidosController from "../controllers/pedidosController";
import tokenService from "../services/tokenService";

class PedidosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', tokenService.verifyToken, pedidosController.getPedido);
        this.router.post('/', tokenService.verifyToken, pedidosController.create);
    }
}

const pedidosRoutes = new PedidosRoutes();
export default pedidosRoutes.router;
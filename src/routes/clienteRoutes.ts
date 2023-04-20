import { Router } from "express";
import clienteController from "../controllers/clienteController";
import tokenService from "../services/tokenService";

class ClienteRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id', tokenService.verifyToken, clienteController.getOneCliente);
        this.router.put('/:id', tokenService.verifyToken, clienteController.updateOneCliente)
    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;
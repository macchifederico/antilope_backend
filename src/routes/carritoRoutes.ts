import { Router } from "express";
import carritoController from "../controllers/carritoController";
import tokenService from "../services/tokenService";

class CarritoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken,carritoController.list);
        // this.router.get('/:id', carritoController.getOne);
        this.router.post('/', tokenService.verifyToken, carritoController.create);
        // this.router.put('/:id', tokenService.verifyToken,carritoController.update);
        this.router.delete('/:id',  tokenService.verifyToken, carritoController.delete);
    }
}

const carritoRoutes = new CarritoRoutes();
export default carritoRoutes.router;
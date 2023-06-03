import { Router } from "express";
import sucursalesController from "../controllers/sucursalesController";

class SucursalRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', sucursalesController.list);
        //this.router.get('/:id', productosController.getOne);
        // this.router.post('/', productosController.create);
        // this.router.put('/:id', productosController.update);
        // this.router.delete('/:id', productosController.delete);
    }
}

const sucursalRoutes = new SucursalRoutes();
export default sucursalRoutes.router;
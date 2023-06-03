import { Router } from "express";

class LoginRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
    }
}

const loginRoutes = new LoginRoutes();

export default loginRoutes.router;
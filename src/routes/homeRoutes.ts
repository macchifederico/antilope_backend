import { Router } from "express";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import homeController from "../controllers/homeController";
// import  verifyToken  from "../services/tokenService"
import tokenService from '../services/tokenService';

class HomeRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken, homeController.index);
    }
}

const homeRoutes = new HomeRoutes();

export default homeRoutes.router;

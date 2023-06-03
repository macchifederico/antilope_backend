import { Router } from "express";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
// import  verifyToken  from "../services/tokenService"
import tokenService from '../services/tokenService';

class HomeRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
    }
}

const homeRoutes = new HomeRoutes();

export default homeRoutes.router;

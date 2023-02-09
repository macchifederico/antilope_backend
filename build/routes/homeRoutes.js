"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = __importDefault(require("../controllers/homeController"));
// import  verifyToken  from "../services/tokenService"
const tokenService_1 = __importDefault(require("../services/tokenService"));
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, homeController_1.default.index);
    }
}
const homeRoutes = new HomeRoutes();
exports.default = homeRoutes.router;

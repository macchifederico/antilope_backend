"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
//no utilizado
class HomeController {
    index(req, res) {
        res.json({
            text: 'homeController',
        });
    }
}
exports.homeController = new HomeController();
exports.default = exports.homeController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
class HomeController {
    index(req, res) {
        res.json({
            text: 'homeController',
            id: req.userId
        });
    }
}
exports.homeController = new HomeController();
exports.default = exports.homeController;

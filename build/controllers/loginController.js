"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
class LoginController {
    index(req, res) {
        res.json({
            text: 'loginController'
        });
    }
}
exports.loginController = new LoginController();
exports.default = exports.loginController;

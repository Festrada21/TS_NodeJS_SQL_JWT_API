"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singIn = exports.singUp = void 0;
const singUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'singup' });
});
exports.singUp = singUp;
const singIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'singIn' });
});
exports.singIn = singIn;
//# sourceMappingURL=auth_controllers.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const APP = (0, express_1.default)();
const PORT = 8080;
APP.get('/', (req, res) => {
    res.send("Hello World !!!");
});
APP.listen(PORT, () => {
    console.log(`Server running in : http://localhost:${PORT}`);
});

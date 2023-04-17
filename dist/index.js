"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const testFunc = () => {
    return {
        title: "Random number",
        num: Math.round(Math.random() * 10),
    };
};
console.log(testFunc());
app.get("/", (req, res) => {
    let hello = "<div style='height: 100%; display:flex; flex-direction: column; align-items: center; justify-content: center;'><h1>Hello Guys!</h1> <hr> <h2 style='margin: 0;'>This is my first <span style='color: green;'>Node.js</span> <span style='color: #F8DF1B;'>Express.js</span> <span style='color: #2D79C7;'>Typescript</span> App</p></div>";
    res.send(hello);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

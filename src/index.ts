import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

interface TestFuncOutput {
  title: string;
  num: number | string;
}

const testFunc = (): TestFuncOutput => {
  return {
    title: "Random number",
    num: Math.round(Math.random() * 10),
  };
};

console.log(testFunc());

app.get("/", (req: Request, res: Response) => {
  let hello: string =
    "<div style='height: 100%; display:flex; flex-direction: column; align-items: center; justify-content: center;'><h1>Hello Guys!</h1> <hr> <h2 style='margin: 0;'>This is my first <span style='color: green;'>Node.js</span> <span style='color: #F8DF1B;'>Express.js</span> <span style='color: #2D79C7;'>TypeScript</span> App</p></div>";
  res.send(hello);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import  express, { Express, Request, Response } from "express";

const app:Express = express();



app.get("/", (req: Request, res:Response) => {
  res.json("hello world!");
});

app.get("/hello", (req: Request, res:Response)=>{
  res.json("hello world again")
})

export default app;



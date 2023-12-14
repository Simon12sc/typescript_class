import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true });
});

app.listen(8000, () => {
  console.log("8000 port is started!");
});

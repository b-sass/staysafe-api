import connection from './db';
import express, { Response } from "express";
import userRouter from "./routes/users";
import defaultRouter from "./routes/default";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use("/", defaultRouter);
app.use("/users", userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
import connection from './db';
import express, { Response } from "express";
import userRouter from "./routes/users";

const app = express()
const port = 3000


app.use("/users", userRouter);


app.get('/', (req, res) => {
  res.send({
    "endpoints": {
      "activities": [
        "get", "post", "put", "delete"
      ],
      "contacts": [
        "post", "delete"
      ],
      "locations": [ 
        "get", "post", "put", "delete"
      ],
      "users": [
        "get", "post", "put", "delete"
      ]
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
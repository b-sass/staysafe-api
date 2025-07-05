import connection from './db';
import { createUser, getUserById, getAllUsers } from './controllers/users';
import express, { Response } from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  testDB(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function testDB(res: Response) {
  try {
    await connection.authenticate();
    console.log(process.env.DB_USER)
    console.log('Connection has been established successfully.');
    res.send(await getAllUsers());
    
  } catch (error) {
    res.send(`Unable to connect to the database: ${error}`);
  }
}
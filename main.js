import pool from './db.js';
import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  pool.getConnection()
    .then(conn => {
      // Query to get all table names in the current database
      conn.query("SELECT table_name FROM information_schema.tables WHERE table_schema = DATABASE()")
        .then((rows) => {
          // rows is an array of objects with table_name property
          const tableNames = rows.map(row => row.table_name);
          res.json({ tables: tableNames });
          conn.end();
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: 'Database query failed' });
          conn.end();
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Could not connect to database' });
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
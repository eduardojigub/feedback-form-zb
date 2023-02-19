import * as dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS middleware to allow requests from frontend
app.use(cors());

// Set up body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Set up MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
});

app.get('/', (_req, res) => {
  res.send({ message: 'im online' });
});

app.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const query =
    'INSERT INTO railway.form (name, email, message) VALUES (?, ?, ?)';
  pool.query(query, [name, email, message], (error, _results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving form');
    } else {
      res.status(200).send('Form saved successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

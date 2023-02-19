import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PORT } from './config.js';
import { pool } from './db.js';
dotenv.config();

const app = express();

// Set up CORS middleware to allow requests from frontend
app.use(cors());

// Set up body-parser middleware to parse JSON requests
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send({ message: 'im online' });
});

app.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const query =
    'INSERT INTO form.form_data (name, email, message) VALUES (?, ?, ?)';
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

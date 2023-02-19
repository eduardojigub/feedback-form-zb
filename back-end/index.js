import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PORT } from './config.js';
import { pool } from './db.js';

const app = express();

// Set up CORS middleware to allow requests from frontend
app.use(cors());

// Set up body-parser middleware to parse JSON requests
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send({ message: 'im online' });
});

app.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const query =
      'INSERT INTO railway.form (name, email, message) VALUES (?, ?, ?)';
    const results = await pool.query(query, [name, email, message]);
    res.status(200).send('Form saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving form');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

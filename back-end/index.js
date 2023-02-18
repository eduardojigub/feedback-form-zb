import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3333;

// Set up CORS middleware to allow requests from frontend
app.use(cors());

// Set up body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Set up MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

app.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const query = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
  pool.query(query, [name, email, message], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving feedback');
    } else {
      res.status(200).send('Feedback saved successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${PORT}`);
});

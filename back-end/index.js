import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3333;

// Set up CORS middleware to allow requests from frontend
app.use(cors());

// Set up body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

import 'dotenv/config';
import express from 'express';
import { PORT } from './constants.js';
import connectToDatabase from './db/connection_db.js';

const port = 3000
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

async function startServer() {
  try {
    await connectToDatabase();
    console.log('imported and Connected to the database');

    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is running on localhost:${process.env.PORT || PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
}

startServer();
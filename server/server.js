// server.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import ViteExpress from 'vite-express';
import users from './routes/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = process.env.PORT || 3000;

const adminUser = 'admin'; // admin username for testing purposes
const adminPassword = await bcrypt.hash('1234', 10); // 1234 - admin password for testing purposes

app.use(express.json()); 

app.use('/users', users);

app.get('/message', (req, res) => {
    res.send('Hello World!');
    console.log(`Hello World! - port ${PORT}`);
});

app.post('/admin/login', async (req, res) => {
  const { userName, password } = req.body;
  
  // just compares the username and password to the test creditials for demonstration purposes
  if (userName !== adminUser || !await bcrypt.compare(password, adminPassword)) {
    console.log('Invalid admin login attempt:', req.body);
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { userName },
    process.env.JWT_SECRET, // add .env file ROOT dir
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

ViteExpress.listen(app, PORT, () =>
    console.log(`Server listening on port ${PORT}`)
);
// server.js
import express from 'express';
import ViteExpress from 'vite-express';
import users from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use('/users', users);

app.get('/message', (req, res) => {
    res.send('Hello World!');
    console.log(`Hello World! - port ${PORT}`);
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
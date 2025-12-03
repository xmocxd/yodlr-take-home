// server.js
import express from 'express';
import ViteExpress from 'vite-express'; // For easier integration

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/message', (req, res) => {
    res.send('Hello from Express!');
    console.log(`Hello from Express! - port ${PORT}`);
});

// Use ViteExpress to serve the React app in development and production
ViteExpress.listen(app, PORT, () =>
    console.log(`Server listening on port ${PORT}`)
);
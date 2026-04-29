const express = require('express');

const app = express();
const PORT = 3000;

// Route
app.get('/', (req, res) => {
    res.send('🚀 CI/CD Pipeline is Working!');
});

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
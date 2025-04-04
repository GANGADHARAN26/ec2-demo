const express = require('express');
const app = express();
const port = 3000; // Change this if needed

// Sample Route - Responds with JSON data
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello, this is your data!", status: "success" });
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

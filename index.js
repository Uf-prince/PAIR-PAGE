const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Heroku will provide the PORT

// Serve the 'man.html' file when a request comes to the root '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

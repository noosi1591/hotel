const express = require('express');
const app = express();
const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
app.use(express.json())
app.use('/api/rooms', roomsRoute)

// Start the server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Node Server Started using nodemon`));



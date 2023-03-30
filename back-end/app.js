// TBqXTrDBFdKBV0aa

//mongodb+srv://samiullahk997:<password>@cluster0.dsbo90u.mongodb.net/?retryWrites=true&w=majority


// app.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
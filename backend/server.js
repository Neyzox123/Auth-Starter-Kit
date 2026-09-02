const express = require('express');
const app = express();
require('dotenv');
const PORT = process.env.BACKEND_PORT || 8080;

app.use(express.json());


app.listen(PORT, (req, res) => {
    console.log("Hello! Backend is now working!");
})
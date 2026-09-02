const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 8080;
const cors = require('cors');
const bcrypt = require('bcrypt')
const db = require('./db')
require('dotenv')


app.use(express.json());
app.use(cors());

app.post('/api/register', async (req, res) => {
   try{
     const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: 'Enter an valid email & and a password too!'})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
        'INSERT INTO users (email, password) VALUES(?, ?)',
        [email, hashedPassword]
    );

    return res.status(201).json({ message: 'Perfect! Your account has been created and secured sucessfully.'})
   } catch(error) {
    console.error(error)
   }
})


app.get('/', (req, res) => {
    console.log("Backend working.")
});



app.listen(PORT, (req, res) => {
    console.log("Hello! Backend is now working!");
});
require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const { register, login } = require('./controllers/authController')
const app = express()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// auth routes 
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// test routes 
const testRoutes = require('./routes/testProtectedRoutes');
app.use('/test', testRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
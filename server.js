const express = require('express')
const { register, login } = require('./controllers/authController')
const app = express()
const port = 3000;

app.use(express.json());

// auth routes 
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// test routes 
const testRoutes = require('./routes/testProtectedRoutes');
app.use('/test', testRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
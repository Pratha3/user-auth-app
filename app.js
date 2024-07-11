const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const authRoutes = require('./routers/authRoutes.js');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('home'));
app.get('/register', (req, res) => res.render('register'));
app.get('/login', (req, res) => res.render('login'));
app.get('/forgot-password', (req, res) => res.render('forgot-password'));
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});

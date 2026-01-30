const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const bcrypt=require('bcrypt');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'harsh');
    res.send('HOME OK');
});

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send('READ OK');
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});

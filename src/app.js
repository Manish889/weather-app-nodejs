const express = require('express')
const app = express();

// public static file path
app.use(express.static());

// routing
app.get('', (req, res) => {
    res.send('HomePAge')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/weather', (req, res) => {
    res.send('weather')
})

app.get('*', (req, res) => {
    res.send('404 error oops')
})


app.listen(8000, () => {
    console.log('server is up and running on port 8000');
})
const express = require('express')
const path = require('path');
const hbs = require('hbs');
const app = express();


// public static file path

const static_path = path.join(__dirname , '../public');
const template_path = path.join(__dirname , '../templates/views');
const partials_path = path.join(__dirname , '../templates/partials');

console.log(template_path);

app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get('', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/forcast', (req, res) => {
    res.render('forcast')
})

app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg: "oops 404 error"
    })
})


app.listen(8000, () => {
    console.log('server is up and running on port 8000');
})
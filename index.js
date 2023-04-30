const express = require('express');
const app = express()
const port = process.env.port || 5000

const places = require('./data/places.json');

const cors = require('cors');

app.use(cors())

app.get('/',(req, res) => {
    res.send('Travel Guru')
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)

    const actualPlace = places.find(place => place.id === parseInt(id));

    res.send(actualPlace);
})

app.listen(port, () => {
    console.log(`Dragon News API listening on port ${port}`)
  })
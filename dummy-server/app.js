const express = require('express')
var app = express()

const cors = require('cors');
const router = require('./network/routes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
router(app);

app.use('/', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchando en http://localhost:3000')
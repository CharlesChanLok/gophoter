// import JwtStrategy from '../../express-oauth/util/auth/JwtStrategy';

const express = require('express');
const bodyParser = require('body-parser');
const router = require("./config/router");
// const guard = require("./config/guard");
const { PORT, NODE_ENV } = require('./config/server-config');
const cors = require('cors');
const app = express();
const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile);

// const jwt = JwtStrategy()


//serve the images
// app.use(express.static('uploads'));
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// app.use('/auth', router.getRouter());
const { PhotoRouter } = require('./routers');

app.use('/upload', new PhotoRouter().router());
app.get('/', (req, res) => {
    res.send('working');
})
app.listen(PORT, () => console.log('Listening on :', PORT));


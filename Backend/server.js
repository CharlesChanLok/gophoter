const JwtStrategy = require('./config/JwtStrategy');
const express = require('express');
const bodyParser = require('body-parser');
const router = require("./config/router");
const { PORT, NODE_ENV } = require('./config/server-config');
const cors = require('cors');
const app = express();
// const photoRouter = require('./routers/photoRouter');
const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile);
const User = require('./services/User');
const jwt = JwtStrategy()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const user = new User(knex);
const jwtAuth = JwtStrategy(user);
const AuthPath = new router(jwtAuth,user);

app.use('/auth', AuthPath.getRouter());

//app.use('/upload', photoRouter);
app.get('/', (req, res) => {
    res.send('working');
})
app.listen(PORT, () => console.log('Listening on :', PORT));


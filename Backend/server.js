const JwtStrategy = require('./routers/JwtStrategy');
const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routers/router");
const { PORT, NODE_ENV } = require('./config/server-config');
const cors = require('cors');
const app = express();
const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile);
const User = require('./services/UserService');
const jwt = JwtStrategy();
const EventService = require('./services/EventService');

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const user = new User(knex);
const eventService = new EventService(knex);
const jwtAuth = JwtStrategy(user);
const AuthPath = new router(jwtAuth, user);

// app.use('/auth', router.getRouter());
const {
    PhotoRouter,
    EventRouter } = require('./routers');

app.use(express.static('uploads'));
app.use('/photos', new PhotoRouter().router());
app.use('/events', new EventRouter(eventService).router());
app.use('/auth', AuthPath.getRouter());

//app.use('/upload', photoRouter);
app.get('/', (req, res) => {
    res.send('working');
})
app.listen(PORT, () => console.log('Listening on :', PORT));


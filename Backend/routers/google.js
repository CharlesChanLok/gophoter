const express =require('express');
const axios =require('axios');
const jwtSimple =require('jwt-simple');
const config = require('../config/secretconfigs');
const app = express();
const router = express.Router();

class AuthRouter{
    constructor() {
    }
    getRouter() {
        const router = express.Router();
        router.post("/google", this.loginWithGoogle.bind(this));
        return router;
    }
    async loginWithGoogle(req, res) {
        const accessToken = req.body.accessToken;
        if (!accessToken) { 
            res.sendStatus(401);
        }
        try {
            const authResult  = await axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`)
            if (authResult.data.error) {
                res.sendStatus(401);
            }
            const token = jwtSimple.encode({ id: accessToken }, config.jwtSecret);
            res.json({ token: token });
            console.log("Token Success");
        } catch(err) {
            console.log("ERROR " + err)
            res.sendStatus(401);
        }
    }
}

module.exports = AuthRouter;
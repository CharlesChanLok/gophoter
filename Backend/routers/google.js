const express =require('express');
const axios =require('axios');
const jwtSimple =require('jwt-simple');
const config = require('../config/secretconfigs');
const UserService = require('../services/UserService');
const { NODE_ENV } = require('../config/server-config');
const knexFile = require('../knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);
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
            let Userservice = new UserService();
            const authResult  = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`);
            if(authResult.data.error) {
                res.sendStatus(401);
            }
            else if (Userservice.findid(authResult.data.email) == null || Userservice.findid(authResult.data.email) == undefined){
                let userid = Userservice.create(authResult.data);
                let token = jwtSimple.encode({ id: accessToken, info: authResult.data }, config.jwtSecret);
                res.json({token: token , UserProfile: authResult.data, id: userid});
            }
            else {
                let user = Userservice.findid(authResult.data.email)
                user.then((id)=>{
                let token = jwtSimple.encode({id: accessToken, info: authResult.data }, config.jwtSecret);
                console.log( authResult.data);
                res.json({token: token , profile: authResult.data, id: id});
                })
                }            
        } catch(err) {
            console.log("ERROR ", err);
            res.sendStatus(401);
        }
    }
}

module.exports = AuthRouter;
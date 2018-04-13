const express = require('express');
const user = require('../services/UserService');

/**
 * User Routes
 * -------------------------
 * Handle requests from /users
 */
module.exports = class UserRouter{
    constructor(userService){
        this.userService = userService;
    }

    getRouter(){
        let router = express.Router();
        router.get("/", this.get.bind(this));
        return router;
    }

    get(req, res) {
        return this.userService.list()
                .then((data) => {
                    res.json(data)
                })
                .catch((err) => {
                    res.status(500).json(err)
                });
    }
}



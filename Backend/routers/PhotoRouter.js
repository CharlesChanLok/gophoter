require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

module.exports = class PhotoRouter {
    constructor(photoService) {
        this.photoService = photoService;
        this.upload = multer({
            storage: multer.diskStorage({
                destination: function (req, file, cb) {
                    fs.stat(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
                        // create a new directory
                        if (err) {
                            fs.mkdir(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
                                err ? new Error('Cannot create dir') :
                                    cb(null, path.join(`uploads/${req.params.id}`))
                            })
                        } else {                        // directory already exist
                            cb(null, path.join(`uploads/${req.params.id}`))
                        }
                    })
                },
                filename: function (req, file, cb) {
                    cb(null, file.fieldname + '-' + Date.now() + file.mimetype.replace(/image\//, '.'))
                }
            })
        })
    }

    router() {
        let router = express.Router();
        router.get('/', this.upload.single('image'), this.post.bind(this));
        router.post('/:id', this.upload.single('image'), this.post.bind(this));
        return router;
    }

    post(req, res) {
        req.file.path = `${process.env.HOST_ADDRESS}:${process.env.PORT}/${req.params.id}/${req.file.filename}`
        // console.log('file', req.file)
        return this.photoService.create(req.file)
            .then((photo) => {
                // console.log(photo); 
                return res.json(photo)
            })
            .catch((err) => res.status(500).json(err));
    }
} 
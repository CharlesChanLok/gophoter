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
        console.log('photo router');
        let router = express.Router();
        router.get('/', this.upload.single('image'), this.get.bind(this));
        router.get('/:id', this.upload.single('image'), this.getPhotosByUser.bind(this));
        router.post('/:id', this.upload.single('image'), this.post.bind(this));

        return router;
    }

    get(req, res) {
        return this.photoService.list()
            .then((photo) => res.json(photo))
            .catch((err) => res.status(500).json(err));
    }
    post(req, res) {
        let data = {
            userId: req.params.id,
            path: `${process.env.HOST_ADDRESS}:${process.env.PORT}/${req.params.id}/${req.file.filename}`
        }
        console.log('file', data)
        return this.photoService.create(data)
            .then((photo) => {
                 console.log('photot', photo); 
                return res.json(photo)
            })
            .catch((err) => res.status(500).json(err));
    }

    getPhotosByUser(req, res) {
        return this.photoService.listPhotosByUser(req.params.id)
            .then((photos) => {
                console.log(photos); 
                return res.json(photos)
            })
            .catch((err) => res.status(500).json(err));
    }
} 
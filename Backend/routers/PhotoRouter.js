const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

module.exports = class PhotoRouter {
    constructor() {
        // this.photoService = photoService;
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
                        }
                        // directory already exist
                        cb(null, path.join(`uploads/${req.params.id}`))
                    })
                },
                filename: function (req, file, cb) {
                    cb(null, file.fieldname + '-' + Date.now() + file.mimetype.replace(/image\//, '.'))
                }
            })
        })
    }

    //this.upload = multer({dest: "uploads/"})

    // check if the directory existed 
    // isDirExist (req, res, next) {
    //     fs.stat(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
    //         if (!err) {
    //             next();
    //         }
    //         fs.mkdir(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
    //             if (err) {
    //                 console.log('2', err)
    //             }
    //             next();
    //         })
    //     })
    // }

    router() {
        let router = express.Router();
        router.get('/', this.upload.single('image'), this.post.bind(this));
        router.post('/:id', this.upload.single('image'), this.post.bind(this));
        return router;
    }

    post(req, res) {
        console.log(req.file)
        return res.status(201).send('success')
    }
} 
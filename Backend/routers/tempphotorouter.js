// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, path.join(`uploads/${req.params.id}`))
// //     },
// //     filename: function (req, file, cb) {
// //         console.log(file);
// //         cb(null, file.fieldname + '-' + Date.now())
// //     }
// // })

// module.exports = class PhotoRouter {
//     constructor(photoService) {
//         this.photoService = photoService;
//         this.upload = multer({
//             storage: multer.diskStorage({
//                 destination: function (req, file, cb) {
//                     cb(null, path.join(`uploads/${req.params.id}`))
//                 },
//                 filename: function (req, file, cb) {
//                     console.log(typeof file.mimetype);
//                     fs.stat(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
//                         if (!err) {
//                             // if ((/\.(gif|jpe?g|tiff|png)$/i).test(imageType))
//                             cb(null, file.fieldname + '-' + Date.now() + file.mimetype.replace(/image\//, '.'))
//                         }
//                         fs.mkdir(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
//                             if (err) {
//                                 console.log('2', err)
//                             }
//                             cb(null, file.fieldname + '-' + Date.now() + file.mimetype.replace(/image\//, '.'))
//                         })
//                     })

//                 },

//             })
//         });

//         //this.upload = multer({dest: "uploads/"})
//     }

//     // check if the directory existed 
//     // isDirExist (req, res, next) {
//     //     fs.stat(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
//     //         if (!err) {
//     //             next();
//     //         }
//     //         fs.mkdir(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
//     //             if (err) {
//     //                 console.log('2', err)
//     //             }
//     //             next();
//     //         })
//     //     })
//     // }

//     router() {
//         let router = express.Router();
//         router.get('/', this.upload.single('image'), this.post.bind(this));
//         router.post('/:id', this.upload.single('image'), this.post.bind(this));
//         return router;
//     }

//     post(req, res) {
//         // return this.photoService.create(req.body)
//         //     .then((photo) => {
//         //         console.log(photo)
//         //         res.json(photo)
//         //     })
//         // //     .catch((err) => res.status(500).json(err));
//         // console.log('file', req.file)
//         return res.status(201).send('success')
//     }
// } 
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file_controller');
const fileDetailsController = require('../controllers/fileDetails_controller');


 
router.post('/upload', fileController.upload);
router.get('/fileDetails/:name', fileDetailsController.fileDetails);
router.get('/fileDetails/delete/:name', fileDetailsController.delete);

module.exports = router; 
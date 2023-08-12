const express = require('express');
const router = express.Router(); 
const { ScrapperController } = require('../controller/_index');

router.post('/', ScrapperController); 

module.exports = router; 

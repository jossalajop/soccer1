
const express = require('express');
const { show } = require('../controller/inicio.controller');
const router = express.Router();

router.get('/',show)


module.exports = router;
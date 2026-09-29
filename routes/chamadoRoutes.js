const express = require('express');
const chamadoController = require('../controllers/chamadoControllers')
const router = express.Router();



router.post('/', chamadoController.criar)

module.exports = router;

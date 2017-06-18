var express = require('express');
var router = express.Router();

var insertform_controller = require('../public/javascripts/genreController');

/* GET users listing. */
router.get('/genre/create', insertform_controller.genre_create_get);
router.post('/genre/create', insertform_controller.genre_create_post);

module.exports = router;
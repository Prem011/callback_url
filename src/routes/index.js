const express = require('express');
const router = express.Router();
const callbackController = require('../controllers/callbackController');

// Define the route for handling callbacks
router.post('/callback', callbackController.handleCallback);
router.get('/callback', function(req, res){
    res.json('Hello World from Callback API!');
});

module.exports = router;

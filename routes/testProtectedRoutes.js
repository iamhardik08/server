const express = require('express');
const { validateAccessToken } = require('../middlewares/validateToken');
const User = require('../models/User');

const router = express.Router();


router.get('/testRoute', validateAccessToken, async(req, res) => {

    const userId = req.userId;

    const user = await User.findOne({where: {id: userId}});

    res.json({user});
});

module.exports = router;
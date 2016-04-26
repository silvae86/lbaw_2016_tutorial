var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
router.get('/all', function (req, res, next)
{
    models.User.findAll({
        include: [ models.Task ]
    }).then(function(users) {
        res.render('users/all',
            {
                title: 'All users',
                users: users
            }
        );
    });
});


router.get('/new', function (req, res, next)
{
    res.render('users/new',
        {
            title: 'New user'
        }
    );
});

router.post('/new', function (req, res, next)
{

    res.render('users/new',
        {
            title: 'New user',
            message: "User "+ req.body.firstname +" " +req.body.surname+ "created successfully"
        }
    );
});

module.exports = router;

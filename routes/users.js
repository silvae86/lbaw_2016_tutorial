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
    return models.User.create({
        username: req.body.username,
        firstname : req.body.firstname,
        surname : req.body.surname
    })
    .then(function(new_user) {
        res.render('users/new',
            {
                title: 'New user',
                success_message: "User "+ new_user.firstname +" " +new_user.surname+ "created successfully."
            }
        );
    })
    .catch(function(error) {
        res.render('users/new',
            {
                title: 'New user',
                error_message: "Error creating user "+ req.body.firstname +" " +req.body.surname + " : " + error
            }
        );
    });

});

module.exports = router;

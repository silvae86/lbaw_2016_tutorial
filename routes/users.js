var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
router.get(
    '/all', 
    function (req, res, next)
    {
        var acceptsHTML = req.accepts('html');
        var acceptsJSON = req.accepts('json');
    
        models.User.findAll({
            include: [ models.Task ]
        }).then(function(users) {
    
            if(acceptsJSON && !acceptsHTML)  //will be null if the client does not accept html
            {
                res.json(users);
            }
            else
            {
                    res.render(
                        'users/all',
                        {
                            title: 'All users',
                            users: users
                        }
                    );
            }
        });
    }
);

router.get('/all_angularjs', function (req, res, next)
{
    res.render('users/all_angularjs',
            {
                title: 'All users'
            }
        );
});


router.get('/new', function (req, res, next)
{
    res.render('users/new',
        {
            title: 'New user'
        }
    );
});

router.get('/new_angularjs', function (req, res, next)
{
    res.render('users/new_angularjs',
        {
            title: 'New user'
        }
    );
});

router.post('/new', function (req, res, next)
{
    var acceptsHTML = req.accepts('html');
    var acceptsJSON = req.accepts('json');

    if(acceptsJSON && !acceptsHTML)  //will be null if the client does not accept html)
    {
        var newUserData = req.body;
    }
    else
    {
        var newUserData = {
            username: req.body.username,
            firstname : req.body.firstname,
            surname : req.body.surname
        };
    }

    return models.User.create(newUserData)
        .then(function(new_user) {
            var msg = "User "+ new_user.firstname +" " +new_user.surname+ " created successfully.";

            req.flash('success', msg);

            if(acceptsJSON && !acceptsHTML)  //will be null if the client does not accept html
            {
                res.json({
                    message : msg
                });
            }
            else
            {
                res.redirect("/users/all");
            }

        })
        .catch(function(error) {

            var msg = "Error creating user "+ req.body.firstname +" " +req.body.surname + " : " + error;
            req.flash('error', msg);

            if(acceptsJSON && !acceptsHTML)  //will be null if the client does not accept html
            {
                res.status(500).json({
                    message : msg
                });
            }
            else
            {
                res.redirect("/users/new");
            }
        });

});

module.exports = router;
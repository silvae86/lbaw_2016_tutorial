angular.module('usersApp.controllers')
    .controller('usersCtrl', function (
        $scope,
        $window,
        usersService
    )
        {
            $scope.get_all_users = function ()
            {
                usersService.get_all_users()
                    .then(function(users){
                        $scope.users = users;
                        $scope.show_popup('success', 'OK', "Users fetched.");
                    })
                    .catch(function(error){
                        $scope.show_popup('error', 'Unable to fetch users', error);
                    });
            };

            $scope.create_user = function ()
            {
                if($scope.username == null)
                {
                    $scope.show_popup('warning', 'Warning', 'No username specified');
                }
                else if($scope.firstname == null)
                {
                    $scope.show_popup('warning', 'Warning', "No first name specified");
                }
                else if($scope.surname == null)
                {
                    $scope.show_popup('warning', 'Warning', 'No surname specified');
                }
                else
                {
                    usersService.create_user({
                        username: $scope.username,
                        firstname : $scope.firstname,
                        surname : $scope.surname
                    })
                        .then(function(result){
                                $window.location.href = "/users/all_angularjs";
                        })
                        .catch(function(error){
                            $scope.show_popup('error', 'Unable to create user', error.data.message);
                        });
                }
            };
        }
    );
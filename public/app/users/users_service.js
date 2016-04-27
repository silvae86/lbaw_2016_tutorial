'use strict';

angular.module('usersApp.services')
    .service('usersService', ['$http',
        function ($http) {

            this.get_all_users = function()
            {
                return $http({
                    method: 'GET',
                    url: '/users/all',
                    contentType: "application/json",
                    headers: {'Accept': "application/json"}
                }).then(
                    function (response)
                    {
                        return response.data;
                    }
                );
            };


            this.create_user = function(new_user)
            {
                var new_user_string = JSON.stringify(new_user);

                return $http({
                    method: 'POST',
                    url: '/users/new',
                    data: new_user_string,
                    contentType: "application/json",
                    headers: {'Accept': "application/json"}
                }).then(
                    function (response)
                    {
                        return response.data;
                    }
                );
            }
        }
    ]);
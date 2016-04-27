angular.module('usersApp.controllers')
    .controller('windowCtrl', function (
            $scope,
            windowService
        )
        {
            $scope.show_popup = function(type, title, message)
            {
                windowService.show_popup(type,title,message);
            };
        }
    );
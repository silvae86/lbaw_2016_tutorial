'use strict';

var stack_topright = {"dir1": "down", "dir2": "left", "push": "top"};

PNotify.prototype.options.styling = "bootstrap3";

angular.module('usersApp.services')
    .service('windowService',
        ['$http',
            function () {
                this.show_popup = function(type, title, message)
                {
                    if(type == "success")
                    {
                        new PNotify({
                            title: title,
                            text: message,
                            type: 'success',
                            opacity: 1.0,
                            delay: 2000,
                            addclass: "stack-bar-top",
                            cornerclass: "",
                            stack: stack_topright
                        });
                    }
                    else if(type == "error")
                    {
                        new PNotify({
                            title: title,
                            text: message,
                            type: 'error',
                            opacity: 1.0,
                            delay: 5000,
                            addclass: "stack-bar-top",
                            cornerclass: "",
                            stack: stack_topright
                        });
                    }
                    else if(type == "info")
                    {
                        new PNotify({
                            title: title,
                            text: message,
                            type: 'info',
                            opacity: 1.0,
                            delay: 8000,
                            addclass: "stack-bar-top",
                            cornerclass: "",
                            stack: stack_topright
                        });
                    }
                    else if(type == "warning")
                    {
                        new PNotify({
                            title: title,
                            text: message,
                            type: 'warning',
                            opacity: 1.0,
                            delay: 8000,
                            addclass: "stack-bar-top",
                            cornerclass: "",
                            stack: stack_topright
                        });
                    }
                };
}]);

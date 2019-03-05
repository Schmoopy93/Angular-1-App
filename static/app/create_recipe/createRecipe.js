(function (angular) {
    var app = angular.module('mainApp');
    app.controller('recCtrl', ['loginService', '$state', '$http', function(loginService, $state, $http) {
        //initializers
        var that = this;

        that.loggedInUser = {};

        //new post container
        that.noviRecipe = {
            "Users_idUsers": "",
            "name": "",
            "description": ""
            
        };
        that.appendRecipe = function () {
            // that.noviProduct["path"] = "../../media/images/" + String(filename);
            that.noviRecipe["Users_idUsers"] = that.loggedInUser.idUsers;
            $http.post("/addRecipe", that.noviRecipe).then(function (response) {
                if (response.data["status"] == "done") {
                    alert("You have succesfully created your recipe")
                    $state.go('home');
                }
            },
                function (reason) {
                    console.log(reason);
                });
        }
        //---------------------------------------------------------//

        loginService.getLoggedIn(function (user) {
            that.loggedInUser = user;
        },
            function (errorReason) {
                console.log(errorReason);
            })

    }]);

})(angular);
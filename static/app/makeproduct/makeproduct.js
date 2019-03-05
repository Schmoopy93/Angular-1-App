(function (angular) {
    var app = angular.module('mainApp');
    app.controller('productCreateCtrl', ['loginService', '$state', '$http', function(loginService, $state, $http) {
        //initializers
        var that = this;

        that.loggedInUser = {};

        //new post container
        that.noviProduct = {
            "name": "",
            "Energy": "",
            "Carbohydrates": "",
            "Protein": "",
            "TotalFat": "",
            "Cholesterol": "",
            "DietaryFiber": "",
            "price": "",
            "EngPrcnt":"",
            "CrbHydrtPrcnt":"",
            "PrtPrcnt": "",
            "TtlFtPrcnt": "",
            "chlstrlPrcnt": "",
            "dietryFbrPrcnt": "",
            "ntrttxt": "",
            "ntrtinfo":"",
            "path": "",
            "type": "",
            "Users_idUsers": ""
        };

        //-----------------------------------Functions for Adding Post-------------------------------------------//
        that.appendProducts = function () {
            // that.noviProduct["path"] = "../../media/images/" + String(filename);
            that.noviProduct["Users_idUsers"] = that.loggedInUser.idUsers;
            $http.post("/addProduct", that.noviProduct).then(function (response) {
                if (response.data["status"] == "done") {
                    alert("You have succesfully created your product")
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
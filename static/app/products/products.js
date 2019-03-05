(function (angular) {
    var app = angular.module('mainApp');
    app.controller('productsCtrl', ['$http', function($http) {
        var that = this;

        that.vegetables = [];
        that.fruits = [];

        that.fetchVegetables = function() {
            $http.get('/getVegetables').then(
                function(response) {
                    that.vegetables = response.data;
                },
                function(reason) {
                    console.log(reason);
                }
            );
        }

        that.fetchFruits = function() {
            $http.get('/getFruits').then(
                function(response) {
                    that.fruits = response.data;
                },
                function(reason) {
                    console.log(reason);
                }
            );
        }

        that.fetchVegetables();
        that.fetchFruits();
    }]);
})(angular);
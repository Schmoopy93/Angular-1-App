(function (angular) {
    var app = angular.module('mainApp');
    app.controller('UserProfileCtrl', ['loginService', '$state','$http', function(loginService, $state, $http) {

        //initializers
        var that = this;

        that.loggedInUser = {};

        //containers for editting user
        that.forEditUser = {};
        that.enableEdit = false;

        //-----------------------------------Functions for Editting User-------------------------------------------//
        that.prepareUserEdit = function (post) {
            that.forEditUser = angular.copy(that.loggedInUser);
            that.enableEdit = true;
        }

        that.cancelEditUser = function () {
            that.forEditUser = {};
            that.enableEdit = false;
            $state.go("user_profile");
        }

        that.editUser = function () {
            $http.put("/authors/" + that.forEditUser.idUsers, that.forEditUser).then(function (response) {
                that.forEditUser = {};
                alert("You have successfully changed your information");
                $state.go('home');
            },
                function (reason) {
                    console.log(reason)
                });
        }

        that.updateUser = function () {
            Upload.upload({
                url: '/authors/' + that.forEditUser.idUsers,
                method: 'PUT',
                data: {avatar: that.forEditUser.newAvatar,
                       userData: Upload.json(that.forEditUser)}}).then(function () {
                that.fetchData();
            },
            function (reason) {
                console.log(reason);
            });
        }

        //------------------------------------------------------------------------------//

        loginService.getLoggedIn(function (user) {
            that.loggedInUser = user;
        },
            function (errorReason) {
                console.log(errorReason);
            })

    }]);

})(angular);
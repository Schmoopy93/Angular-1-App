(function (angular) {
    var app = angular.module('mainApp');
    app.controller('productCtrl', ['$http', '$state', '$stateParams', 'loginService', function ($http, $state, $stateParams, loginService) {
        var that = this;

        that.enableEdit = false;

        that.product = {};
        that.forEdit = {};
        that.loggedInUser = {};

        that.fetchProduct = function () {
            $http.get('products/' + $stateParams.id).then(
                function (response) {
                    that.product = response.data;
                },
                function (reason) {
                    console.log(reason);
                }
            );
        }

        loginService.isLoggedIn(function () {
            that.fetchProduct();
        },
            function () {
                $state.go('login');
            });


        loginService.getLoggedIn(function (user) {
            that.loggedInUser = user;
        },
            function (errorReason) {
                console.log(errorReason);
            })

        that.checkPrivlage = function () {
            if (that.product.Users_idUsers == that.loggedInUser.idUsers) {
                return true;
            }
            else {
                return false;
            }
        }

        //-----------------------------------Functions for Editting Post--------------------//
        that.callforEdit = function () {
            if (that.checkPrivlage()) {
                that.prepareEdit();
                that.enableEdit = true;
            }
            else {
                alert("You cannot edit someone else's post");
            }
        };

        that.prepareEdit = function () {
            that.forEdit = angular.copy(that.product);
        }

        that.cancelEdit = function () {
            that.forEdit = {};
            that.enableEdit = false;
            $state.go("home");
        }

        that.editPost = function () {
            $http.put("/product/" + that.forEdit.idproduct, that.forEdit).then(function (response) {
                that.forEdit = {};
                alert("You have successfully changed your post");
                $state.go('home');
            },
                function (reason) {
                    console.log(reason)
                });
        }
        //-------------------------------------------------------//

        //-----------Function for removing post-----------//
        that.confirmRemove = function(){
            var r = confirm("Are you you want to remove your post?");
            if (r == true) {
                return true;
            } else {
                return false;
            }
        };

        that.remove = function (id) {
            if (that.checkPrivlage()) {
                if(that.confirmRemove()){
                $http.delete("/products/" + id).then(function (response) {
                    alert("You have succesfully removed your post")
                    $state.go('home')
                },
                    function (reason) {
                        console.log(reason)
                    });
                }
            }
            else {
                alert("You cannot remove someone else's post");
            }
        };
        //----------------------//

    }]);
})(angular);
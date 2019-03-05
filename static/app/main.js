(function (angular) {
    var app = angular.module('mainApp', ['ui.router', 'ngFileUpload', 'loginService']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('app', {
            abstract: true,
            views: {
                navbar: {
                    templateUrl: 'app/navbar/navbar.tpl.html',
                    controller: 'NavbarCtrl',
                    controllerAs: 'nb'
                },
                '': {
                    template: '<ui-view name=""></ui-view>'
                }
            }
        })
        //Moglo je i app.home ali bi moralo da se menja
        //referenciranje pomocu ui-sref.
        $stateProvider.state('home', {
            url: '/',
            parent: 'app', //Da se ne bi menjalo referenciranje stanja
            views: {       //u ui-sref ovde se navodi parent.
                '': {
                    templateUrl: 'app/home/home.tpl.html',
                    controller: 'homeCtrl',
                    controllerAs: 'hc'
                }
            }
        }).state('vegetables', {
            parent: 'app',
            url: '/vegetables',
            views: {
                '': {
                    templateUrl: 'app/products/vegetables.html',
                    controller: 'productsCtrl',
                    controllerAs: 'pc'
                }
            }
        }).state('fruits', {
            parent: 'app',
            url: '/fruits',
            views: {
                '': {
                    templateUrl: 'app/products/fruits.html',
                    controller: 'productsCtrl',
                    controllerAs: 'pc'
                }
            }
        }).state('login', {
            parent: 'app',
            url: '/login',
            views: {
                '': {
                    templateUrl: 'app/login/login.tpl.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'lc'
                }
            }
        }).state('register', {
            parent: 'app',
            url: '/register',
            views: {
                '': {
                    templateUrl: 'app/signup/register.html',
                    controller: 'regControl',
                    controllerAs: 'rc'
                }
            }
        }).state('product', {
            parent: 'app',
            url: '/product/{id:int}',
            views: {
                '': {
                    templateUrl: 'app/product/product.tpl.html',
                    controller: 'productCtrl',
                    controllerAs: 'pl'
                }
            }
        }).state('who',{
            parent:'app',
            url:'/who',
            views:{
                '':{
                    templateUrl:'app/who/who.html',
                    controller: 'whoCtrl',
                    controllerAs: 'wc'
                }
            }
        }).state('userProfile', {
            parent: 'app',
            url: '/userProfile',
            views: {
                '': {
                    templateUrl: 'app/user_profile/user_profile.tpl.html',
                    controller: 'UserProfileCtrl',
                    controllerAs: 'up'
                }
            }
        }).state('makeProduct', {
            parent: 'app',
            url: '/makeProduct',
            views: {
                '': {
                    templateUrl: 'app/makeproduct/makeproduct.tpl.html',
                    controller: 'productCreateCtrl',
                    controllerAs: 'pcc'
                }
            }
        }).state('calculator',{
            parent:'app',
            url:'/calculator',
            views:{
                '':{
                    templateUrl:'app/calculator/calc.tmpl.html',
                    controller:'calCtrl',
                    controllerAs:'cac'
                }
            }
        }).state('createRecipe',{
            parent:'app',
            url:'/createRecipe',
            views:{
                '':{
                    templateUrl:'app/create_recipe/createRecipe.tpl.html',
                    controller:'recCtrl',
                    controllerAs:'rec'
                }
            }
        })
    }]);
})(angular);
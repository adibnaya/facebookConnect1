(function(){
  'use strict';
    var app = angular.module('facebookApp',['ngRoute']);
    app.config(function ($routeProvider){
      $routeProvider
      .when("/main",{
        templateUrl: 'app/pages/main.view.html',
        controller: 'MainCtrl'
      })
      .when("/login",{
        templateUrl: 'app/pages/login.view.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      })
    });
}());

'use strict';

var app= angular
  .module('animationApp', [
   'ui.router'
  ]).config(function ($urlRouterProvider,$stateProvider) {
    
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'HomeCtrl'
    });
    
});














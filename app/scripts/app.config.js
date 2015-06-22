'use strict';
angular.module('voteApp')

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('map', {
        url:'/map',
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .state('filter', {
        url:'/filter',
        templateUrl: 'views/filter.html',
        controller: 'FilterCtrl'
      });

  }]);
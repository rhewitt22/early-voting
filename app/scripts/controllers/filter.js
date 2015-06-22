'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:FilterCtrl
 * @description
 * # FilterCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('FilterCtrl', function ($scope, Filter) {
    Filter.getFilter().then(function(obj) {
      $scope.filter = obj;
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('MainCtrl', function ($scope, $state, Filter) {
    $scope.loading = false;

    Filter.getFilter().then(function(filter) {
      $scope.counties = filter.counties;
      $scope.userCounty = filter.userCounty;
    });

    $scope.setCounty = function() {
      Filter.setCounty($scope.userCounty).then(function() {
        $state.go('map');
      });
    };

    $scope.getLocation = function() {
      $scope.loading = true;
      Filter.getUserLocation().then(function(){
        $scope.loading = false;
        $state.go('map');
      });
    };
  });

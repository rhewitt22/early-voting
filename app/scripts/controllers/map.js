'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('MapCtrl', function ($scope, $state, Filter) {

    Filter.getUserLocation().then(function(location) {
      $scope.center.latitude = location.coords.latitude;
      $scope.center.longitude = location.coords.longitude;
    });

    Filter.getFilter().then(function(filter) {
      $scope.userCounty = filter.userCounty;
      $scope.counties = filter.counties;
    });

    $scope.setCounty = function() {
      Filter.setCounty($scope.userCounty).then(function() {
        $state.go('map');
      });
    };

    angular.extend($scope, {
      center: {
          lat: 33.775704,
          lng: -84.386958,
          zoom: 9
      },
      defaults: {
          scrollWheelZoom: false
      }
    });
    
  });

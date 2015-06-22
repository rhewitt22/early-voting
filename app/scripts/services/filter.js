'use strict';

/**
 * @ngdoc service
 * @name voteApp.Filter
 * @description
 * # Filter
 * Service in the voteApp.
 */
angular.module('voteApp')
  .service('Filter', function ($q, $geolocation) {

    var filter = {
      openLate: true,
      openSunday: true,
      openSaturday: true,
      userCounty: null,
      userLocation: null,
      counties: [
        'Fulton',
        'Cobb',
        'Dekalb'
      ]
    };
      
    function getFilter() {
      var defer = $q.defer();

      defer.resolve(filter);
      return defer.promise;
    }

    function setFilter(newValues) {
      var defer = $q.defer();

      if (typeof newValues === 'object') {
        filter = newValues;
        defer.resolve(filter);
      } else {
        console.log('Input must be an object');
      }
      return defer.promise;
    }

    function getUserLocation() {
      var defer = $q.defer();

      if(!filter.userLocation){
        $geolocation.getCurrentPosition({
          timeout: 60000
        }).then(function(position) {
          filter.userLocation = position;
          defer.resolve(filter.userLocation);
        });
      } else {
        defer.resolve(filter.userLocation);
      }

      return defer.promise;
    }

    function setUserLocation(value) {
      var defer = $q.defer();

      filter.userLocation = value;
      defer.resolve(filter.userLocation);

      return defer.promise;
    }

    function setCounty(county) {
      var defer = $q.defer();

      filter.userCounty = county;
      defer.resolve(filter.userCounty);

      return defer.promise;
    }

    return {
      getUserLocation: getUserLocation,
      setUserLocation: setUserLocation,
      setFilter: setFilter,
      getFilter: getFilter,
      setCounty: setCounty
    };
  });

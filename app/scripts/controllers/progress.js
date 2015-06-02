'use strict';

/**
 * @ngdoc function
 * @name mbnaApplicationApp.controller:ProgressCtrl
 * @description
 * # ProgressCtrl
 * Controller of the mbnaApplicationApp
 */
angular.module('mbnaApplicationApp')
  .controller('ProgressCtrl', ['$scope', 'data', function ($scope, data) {
        $scope.data = data.formdata;
  }]);

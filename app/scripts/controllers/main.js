'use strict';

/**
 * @ngdoc function
 * @name mbnaApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mbnaApplicationApp
 */
angular.module('mbnaApplicationApp')
  .controller('MainCtrl', ['$scope', '$anchorScroll', 'data', function ($scope, $anchorScroll, data) {
        $scope.data = data.formdata;

        //$scope.clearData = data.clearData();

        $anchorScroll(0);
  }]);

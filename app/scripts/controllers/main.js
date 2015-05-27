'use strict';

/**
 * @ngdoc function
 * @name mbnaApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mbnaApplicationApp
 */
angular.module('mbnaApplicationApp')
  .controller('MainCtrl', ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
        $scope.data = [];

        $anchorScroll(0);
  }]);

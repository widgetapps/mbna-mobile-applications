'use strict';

/**
 * @ngdoc service
 * @name mbnaApplicationApp.data
 * @description
 * # data
 * Service in the mbnaApplicationApp.
 */
angular.module('mbnaApplicationApp')
  .service('data', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.formdata = {};

        this.clearData = function() {
            this.formdata = {};
        }
  });

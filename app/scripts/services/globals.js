'use strict';

/**
 * @ngdoc service
 * @name mbnaApplicationApp.globals
 * @description
 * # globals
 * Factory in the mbnaApplicationApp.
 */
angular.module('mbnaApplicationApp')
  .factory('globals', function () {

    var meaningOfLife = 42;
        var showFooter = true;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

        showFooter: function() {
           showFooter = true;
        },
        hideFooter: function() {
            showFooter = false;
        },
        getFooterVisibility: function() {
            return showFooter;
        }

    };
  });

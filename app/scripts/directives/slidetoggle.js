'use strict';

/**
 * @ngdoc directive
 * @name mbnaApplicationApp.directive:slideToggle
 * @description
 * # slideToggle
 */
angular.module('mbnaApplicationApp')
  .directive('slideToggle', ['data', function (data) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          var target = document.querySelector(attrs.slideToggle);
          var mask = document.querySelector('#pagemask');

          element.bind('click', function() {
              var content = target.querySelector('.slideable_content');
              if (!data.helpExpanded) {
                  console.log("CLICK!");
                  content.style.border = '1px solid rgba(0, 0, 0, 0)';
                  var y = content.clientHeight;
                  content.style.border = 0;
                  target.style.height = y + 'px';
                  mask.style.zIndex = 999;
                  mask.style.opacity = 0.8;
              } else {
                  target.style.height = '0px';
                  mask.style.zIndex = -1;
                  mask.style.opacity = 0;
              }
              data.helpExpanded = !data.helpExpanded;
          });
      }
    };
  }]);

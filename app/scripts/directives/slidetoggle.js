'use strict';

/**
 * @ngdoc directive
 * @name mbnaApplicationApp.directive:slideToggle
 * @description
 * # slideToggle
 */
angular.module('mbnaApplicationApp')
  .directive('slideToggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          var target = document.querySelector(attrs.slideToggle);
          attrs.expanded = false;
          element.bind('click', function() {
              var content = target.querySelector('.slideable_content');
              if (!attrs.expanded) {
                  content.style.border = '1px solid rgba(0, 0, 0, 0)';
                  var y = content.clientHeight;
                  content.style.border = 0;
                  target.style.height = y + 'px';
              } else {
                  target.style.height = '0px';
              }
              attrs.expanded = !attrs.expanded;
          });
      }
    };
  });

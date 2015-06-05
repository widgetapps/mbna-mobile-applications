'use strict';

/**
 * @ngdoc overview
 * @name mbnaApplicationApp
 * @description
 * # mbnaApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('mbnaApplicationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/start', {
            templateUrl: 'views/start.html',
            controller: 'MainCtrl'
        })
        .when('/disclosures', {
            templateUrl: 'views/disclosures.html',
            controller: 'MainCtrl'
        })
        .when('/cob', {
            templateUrl: 'views/cob.html',
            controller: 'MainCtrl'
        })
        .when('/tac', {
            templateUrl: 'views/tac.html',
            controller: 'MainCtrl'
        })
        .when('/personal', {
            templateUrl: 'views/personal.html',
            controller: 'MainCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'MainCtrl'
        })
        .when('/employment', {
            templateUrl: 'views/employment.html',
            controller: 'MainCtrl'
        })
        .when('/features', {
            templateUrl: 'views/features.html',
            controller: 'MainCtrl'
        })
        .when('/balance', {
            templateUrl: 'views/balance.html',
            controller: 'MainCtrl'
        })
        .when('/balance_add', {
            templateUrl: 'views/balance_add.html',
            controller: 'MainCtrl'
        })
        .when('/creditwise', {
            templateUrl: 'views/creditwise.html',
            controller: 'MainCtrl'
        })
        .when('/review', {
            templateUrl: 'views/review.html',
            controller: 'MainCtrl'
        })
        .when('/tac2', {
            templateUrl: 'views/tac2.html',
            controller: 'MainCtrl'
        })
        .when('/verification', {
            templateUrl: 'views/verification.html',
            controller: 'MainCtrl'
        })
        .when('/approved', {
            templateUrl: 'views/approved.html',
            controller: 'MainCtrl'
        })
        .when('/tacagree', {
            templateUrl: 'views/tacagree.html',
            controller: 'MainCtrl'
        })
        .when('/cancel', {
            templateUrl: 'views/cancel.html',
            controller: 'MainCtrl'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

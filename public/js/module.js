'use strict';

var app = angular.module('passportTest', ['ui.router', 'ui.bootstrap', 'ngSanitize']);

app.constant('localStorageKey', 'countryKeepr-token');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/general/home.html',
      controller: 'homeCtrl'
    })


  .state('users', {
      abstract: true,
      templateUrl: '/html/users/users.html'
    })
    .state('users.login', {
      url: '/login',
      templateUrl: '/html/users/form.html',
      controller: 'usersCtrl'
    })
    .state('users.register', {
      url: '/register',
      templateUrl: '/html/users/form.html',
      controller: 'usersCtrl'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: '/html/private/profile.html',
      controller: 'privateCtrl'
    })
    .state('view', {
      url: '/view-users',
      templateUrl: '/html/private/viewUsers.html',
      controller: 'privateCtrl'
    })
    .state('post', {
      url: '/country',
      templateUrl: '/html/private/postCountry.html',
      controller: 'privateCtrl'
    })

  $urlRouterProvider.otherwise('/');
});

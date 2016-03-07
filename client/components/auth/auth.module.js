'use strict';

angular.module('4smApp.auth', [
  '4smApp.constants',
  '4smApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

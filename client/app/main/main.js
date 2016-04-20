'use strict';

angular.module('4smApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'GoalCtrl',
        controllerAs: 'main'
      });
  });

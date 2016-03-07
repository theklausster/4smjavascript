'use strict';

angular.module('4smApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('goal', {
        url: '/goal',
        templateUrl: 'app/goal/goal.html',
        controller: 'GoalCtrl'
      });
  });

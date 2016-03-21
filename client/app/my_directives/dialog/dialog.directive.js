'use strict';

angular.module('4smApp')
  .directive('dialog', () => ({
    templateUrl: 'app/my_directives/dialog/dialog.html',
    restrict: 'A',
    scope: {
      goal: '='
    },
    controller: 'DialogController',

  }));

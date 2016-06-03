'use strict';

angular.module('4smApp')
  .directive('editcreatedir', () => ({
    templateUrl: 'app/my_directives/createEditDirective/createEdit.html',
    restrict: 'A',
    scope: {
      goal: '='
    },
    controller: 'createEditCTRL',
    

  }));

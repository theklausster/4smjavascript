'use strict';

angular.module('4smApp')
  .controller('DialogController', function ($scope) {

    if(_.isUndefined($scope.goal)) {
      $scope.goalIsEmpty = true;
    }

  });

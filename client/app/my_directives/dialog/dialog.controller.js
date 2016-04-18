'use strict';

angular.module('4smApp')
  .controller('DialogController', function ($scope) {

    if(_.isUndefined($scope.goal)) {
      $scope.goalIsEmpty = true;
      $scope.subGoal = [];
    }



    $scope.addSubgoal = function(){
      $scope.subGoal.push({name: $scope.sub, done: false});
      $scope.sub = '';
    };

    $scope.removeSubGoal = function(s){
      _($scope.subGoal).remove(a => a.name === s.name);
    };

  });

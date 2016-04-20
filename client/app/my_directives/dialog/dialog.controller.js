'use strict';

angular.module('4smApp')
  .controller('DialogController', function ($scope) {

    if(_.isUndefined($scope.goal)) {
      $scope.goalIsEmpty = true;
      $scope.goal.subGoal = [];
    }




    $scope.addSubgoal = function(){
      $scope.goal.subGoal.push({name: $scope.sub, done: false});
      $scope.sub = '';
    };

    $scope.removeSubGoal = function(s){
      _($scope.goal.subGoal).remove(a => a.name === s.name);
    };

  });

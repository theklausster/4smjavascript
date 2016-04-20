'use strict';

angular.module('4smApp')
  .controller('DialogController', function ($scope, GoalService) {

    if(!_.isUndefined($scope.goal)) {
      $scope.goal.startDate = new Date($scope.goal.startDate);
      $scope.goal.endDate = new Date($scope.goal.endDate);
    }

    if(_.isUndefined($scope.goal)) {
      $scope.goal = {};
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

    $scope.saveOrUpdate = function(){
      if($scope.goal._id){
        GoalService.save($scope.goal);
      }
    };

  });

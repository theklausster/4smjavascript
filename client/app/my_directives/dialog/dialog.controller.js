'use strict';

angular.module('4smApp')
  .controller('DialogController', function ($scope, GoalService, Auth) {

    if(!_.isUndefined($scope.goal)) {
      $scope.goal.startDate = new Date($scope.goal.startDate);
      $scope.goal.endDate = new Date($scope.goal.endDate);
    }

    if(_.isUndefined($scope.goal)) {
      $scope.goal = {};
      $scope.goalIsEmpty = true;
      $scope.goal.subGoal = [];
      GoalService.getAllCategories(function(categories){
        $scope.goal.categories = categories;
      });
    }

    $scope.addSubgoal = function(){
      $scope.goal.subGoal.push({name: $scope.sub, done: false});
      $scope.sub = '';
    };

    $scope.removeSubGoal = function(s){
      _($scope.goal.subGoal).remove(a => a.name === s.name);
    };

    $scope.saveOrUpdate = function(){
      $scope.goal.owner = Auth.getCurrentUser();
      $scope.goal._id ? GoalService.update({id: $scope.goal._id}, $scope.goal) : GoalService.save($scope.goal);
    };


  });

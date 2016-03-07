'use strict';

angular.module('4smApp')
  .controller('GoalCtrl', function ($scope, GoalService, Auth) {
    $scope.isAuthenticated = Auth.isLoggedIn;

    GoalService.query(function(goals){
      $scope.goals = goals;
    });

    $scope.isOwner = function(goal){
      return Auth.getCurrentUser()._id === goal.owner._id;
    }






  });

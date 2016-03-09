'use strict';

angular.module('4smApp')
  .controller('GoalCtrl', function ($scope, GoalService, Auth, socket) {
    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.newGoal = {};

    $scope.isOwner = function(goal){
      return Auth.getCurrentUser()._id === goal.owner._id;
    };

  GoalService.query(function(goals){
      $scope.goals = goals;
      socket.syncUpdates('goal', $scope.goals);
  });


    $scope.add = function(){
        $scope.newGoal.owner = Auth.getCurrentUser();
        GoalService.save($scope.newGoal, function(){
          $scope.newGoal = {};
        });
    };

    $scope.delete = function(goal){
      console.log(goal._id);
      GoalService.delete({id: goal._id});
    };



  });

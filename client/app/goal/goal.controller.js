'use strict';

angular.module('4smApp')
  .controller('GoalCtrl', function ($scope, GoalService, Auth, socket, $mdDialog, $rootScope) {

    $rootScope.$on("ole", function(){
      $scope.openDialog();

  });


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

    $scope.wantUpdate = function(goal){
      console.log(goal._id);
      GoalService.update({id: goal._id});
    };
    $scope.delete = function(goal){
      console.log(goal._id);
      GoalService.delete({id: goal._id});
    };



    $scope.openDialog = function(goal){
  $mdDialog.show({
    clickOutsideToClose: true,
    templateUrl: 'app/goal/test.html',
    targetEvent: event,
    locals:{ hej : goal
    },
    controller: 'OpendialogController',
  })
}

  })
  .controller('OpendialogController', function ($scope, hej) {
    $scope.goal = hej;
  });

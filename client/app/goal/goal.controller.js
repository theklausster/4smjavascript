'use strict';

angular.module('4smApp')
  .controller('GoalCtrl', function($scope, GoalService, Auth, socket, $mdDialog, $rootScope) {

    $rootScope.$on('add', function(){
      $scope.openDialog();
  });

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.newGoal = {};

    $scope.isOwner = function(goal) {
      console.log(goal);
      return Auth.getCurrentUser()._id === goal.owner._id;
    };

    GoalService.query(function(goals) {
      $scope.goals = goals;
      console.log('test', goals);
      socket.syncUpdates('goal', $scope.goals);
    });

    function done(subDone) {
      if (subDone === true) {
        return 'Yes';
      }
      return 'No';
    }

    $scope.getSub = function(goal) {
      var x = '';


    $scope.wantUpdate = function(goal){
      console.log(goal._id);
      GoalService.update({id: goal._id});
    };
      $scope.delete = function(goal) {
        console.log(goal._id);
        GoalService.delete({
          id: goal._id
        });
      };

      _(goal.subGoal).forEach(a => x += a.name + ' ' + done(a.done) + ' ');

      console.log(x);
      return x;
    };

    $scope.add = function() {
      $scope.newGoal.owner = Auth.getCurrentUser();
      GoalService.save($scope.newGoal, function() {
        $scope.newGoal = {};
      });
    };

    $scope.openDialog = function(goal){
  $mdDialog.show({
    clickOutsideToClose: true,
    templateUrl: 'app/goal/createEditGoal.html',
    targetEvent: event,
    locals:{ goal : goal
    },
    controller: 'OpendialogController',
  });
};

  })

  .controller('OpendialogController', function($scope, goal) {
    $scope.goal = goal;

  });

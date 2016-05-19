'use strict';

angular.module('4smApp')
  .controller('GoalCtrl', function($scope, GoalService, Auth, socket, $mdDialog, DialogService) {

    $scope.gridToggle = true;
    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.newGoal = {};
    $scope.isOwner = function(goal) {
      return Auth.getCurrentUser()._id === goal.owner._id ? goal.owner._id : goal.owner;
    };


    function getResultsPage(pageNumber){
      GoalService.paged( {
        limit: 10,
        page: pageNumber}, function(goals){
          $scope.numberOfGoals = goals.total;
          $scope.goals = goals.docs;
          $scope.currentPage = pageNumber;
          socket.syncUpdates('goal', $scope.goals);
  });
}
getResultsPage(1);


$scope.editGoal = function(goal){
    DialogService.opendialog(goal);
};

$scope.pageChanged = function(newPage) {
      console.log(newPage);
       getResultsPage(newPage);
   };

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

    $scope.add = function() {
      $scope.newGoal.owner = Auth.getCurrentUser();
      GoalService.save($scope.newGoal, function() {
        $scope.newGoal = {};
      });
    };

  });

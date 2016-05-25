'use strict';

angular.module('4smApp')
  .controller('GoalCtrl', function($scope, GoalService, Auth, socket, $mdDialog, DialogService, GoalLogic) {
    $scope.hiddenTable = true;
    $scope.gridToggle = true;
    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.newGoal = {};
    $scope.toggleTable = function(goal) {
      goal.hiddenTable = !goal.hiddenTable;
    };

    $scope.isOwner = function(goal) {
      return Auth.getCurrentUser()._id === goal.owner._id ? goal.owner._id : goal.owner;
    };

    var id = Auth.getCurrentUser()._id;
    var done = false;
    var ascOrdesc = '-';
    var sortValue = 'name';

    function getResultsPage(pageNumber, owner, IsDone, sortValue) {
      GoalService.paged({
        searchOwner: owner,
        searchIsDone: IsDone,
        limit: 10,
        sortBy: ascOrdesc + sortValue,
        page: pageNumber
      }, function(goals) {
        $scope.numberOfGoals = goals.total;
        $scope.goals = goals.docs;
        $scope.currentPage = pageNumber;
        socket.syncUpdates('goal', $scope.goals);
      });
    }

    getResultsPage(1, id, done, sortValue);

$scope.sorting = function(sortV){
  sortValue = sortV;
  if(ascOrdesc === '-'){
    ascOrdesc = '';
  }else {
  ascOrdesc = '-';
}
getResultsPage(1, id, done, sortValue);
};

    $scope.editGoal = function(goal) {
      DialogService.opendialog(goal);
    };



    $scope.pageChanged = function(newPage) {
      console.log(newPage);
      getResultsPage(newPage, id, done, sortValue);
    };


    $scope.wantUpdate = function(goal) {
      console.log(goal._id);
      GoalService.update({
        id: goal._id
      }, goal );
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

    $scope.goalStatus = function(goal) {

      return GoalLogic.gStatus(goal);

    };


  });

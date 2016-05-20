'use strict';

angular.module('4smApp')
  .controller('createEditCTRL', function ($scope, GoalService, Auth, $mdDialog, GoalLogic) {

    if(!_.isUndefined($scope.goal)) {
      $scope.goal.startDate = new Date($scope.goal.startDate);
      $scope.goal.endDate = new Date($scope.goal.endDate);
    }

    if(_.isUndefined($scope.goal)) {
      $scope.goal = {};
      $scope.goalIsEmpty = true;
      $scope.goal.subGoal = [];
      $scope.goal.category = {};
    }

    GoalService.getAllCategories(function(categories){
    $scope.goal.categories = categories;
    $scope.goal.updateIntervals = [1, 2, 3, 4, 5, 6, 7];
    if(_.isUndefined($scope.goal.category.name)){
    $scope.selectedCategory = _($scope.goal.categories).find(a => a._id === $scope.goal.category);
  }
  else{
    $scope.selectedCategory = $scope.goal.category;
  }
  });


    $scope.addSubgoal = function(){
      $scope.goal.subGoal.push({name: $scope.sub, done: false});
      $scope.sub = '';
    };

    $scope.removeSubGoal = function(s){
      _($scope.goal.subGoal).remove(a => a._id === s._id);
    };

    $scope.saveOrUpdate = function(){
      $scope.goal.owner = Auth.getCurrentUser();
      if($scope.selectedCategory && $scope.goal.name && $scope.goal.startDate && $scope.goal.endDate && $scope.goal.updateInterval){
             var category = _($scope.goal.categories).find(a => a.name ===  $scope.selectedCategory.name);
             var isDone = GoalLogic.gStatus($scope.goal);
              if(isDone === 100){
                $scope.goal.isDone = true;
              }
              else{
                $scope.goal.isDone = false;
              }
              $scope.goal.category = category._id;
              $scope.goal._id ? GoalService.update({id: $scope.goal._id}, $scope.goal) : GoalService.save($scope.goal);
              $mdDialog.hide();
      }
      else{
          $scope.error = "Please make sure all fields are filled out"
      }
    };

  });

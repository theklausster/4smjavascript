'use strict';

angular.module('4smApp')
  .controller('NavbarController', function ($scope, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },{
      'title': 'Goal',
      'state': 'goal'
    }];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });

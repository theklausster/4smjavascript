  'use strict';


  angular.module('4smApp')
    .controller('NavbarController', function ($scope, Auth, $controller, $rootScope) {
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.add = function(){
          $rootScope.$emit('add', {});
        };


    });

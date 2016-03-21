'use strict';

angular.module('4smApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    }));

'use strict';

describe('Controller: GoalCtrl', function () {

  // load the controller's module
  beforeEach(module('4smApp'));

  var GoalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalCtrl = $controller('GoalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

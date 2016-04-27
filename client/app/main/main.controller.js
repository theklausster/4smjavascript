'use strict';
angular.module('4smApp')
  .controller('MainController', function($http, $scope, socket, GoalService) {

    $scope.shared = {};
    $scope.sharedRandom = {};
    $scope.sharedRated = {};

    function sharedNewGoal() {
      GoalService.sharedNew(function(data) {
        $scope.shared = _.take(data, 5);
        //socket.syncUpdates('goal', sharedNewGoal());
      });
    }
    sharedNewGoal();

    function sharedRandomGoal() {
      GoalService.sharedRandom(function(data) {
        $scope.sharedRandom = data;
        //socket.syncUpdates('goal', sharedRandomGoal());
      });
    }
    sharedRandomGoal();

    function sharedRated() {
      GoalService.sharedRated(function(data) {
        $scope.sharedRated = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedRated();


    function done(subDone) {
      if (subDone === true) {
        return 'Yes';
      }
      return 'No';
    }

    $scope.getSub = function(goal) {
      var x = '';

      _(goal.subGoal).forEach(a => x += a.name + ' - ' + done(a.done) + ' ');

      //  console.log(x);
      return x;
    };

    $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
        input.push(i);
    }
    return input;
};
socket.syncUpdates('goal', sharedNewGoal());
  });

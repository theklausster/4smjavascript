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

$('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  });

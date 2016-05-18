'use strict';
angular.module('4smApp')
  .controller('MainController', function($http, $scope, socket, GoalService) {

    $scope.shared = {};
    $scope.sharedRandom = {};
    $scope.sharedRated = {};
    $scope.sharedRunning = {};
    $scope.sharedWalking = {};
    $scope.sharedPersonal = {};
    $scope.sharedOutdoor = {};
    $scope.sharedIndoor = {};
    $scope.sharedCooking = {};

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

    function sharedRunning() {
      GoalService.sharedRunning(function(data) {
        $scope.sharedRunning = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedRunning();

    function sharedWalking() {
      GoalService.sharedWalking(function(data) {
        $scope.sharedWalking = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedWalking();

    function sharedPersonal() {
      GoalService.sharedPersonal(function(data) {
        $scope.sharedPersonal = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedPersonal();

    function sharedIndoor() {
      GoalService.sharedIndoor(function(data) {
        $scope.sharedIndoor = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedIndoor();

    function sharedOutdoor() {
      GoalService.sharedOutdoor(function(data) {
        $scope.sharedOutdoor = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedOutdoor();

    function sharedCooking() {
      GoalService.sharedCooking(function(data) {
        $scope.sharedCooking = data;
        //socket.syncUpdates('goal', sharedRated());
      });
    }
    sharedCooking();

    function done(subDone) {
      if (subDone === true) {
        return 'Yes';
      }
      return 'No';
    }

    $scope.getSub = function(goal) {
      var x = '';

      _(goal.subGoal).forEach(a => x += a.name + ' - ' + done(a.done) + ' ');

      return x;
    };

    function yesDone(subDone){
      var doneSub = 0;
      if (subDone === true) {
        doneSub += 1;
      }
      return doneSub;
    }

    $scope.goalStatus = function(goal){
      var max = _.size(goal.subGoal);
      var x = 0;
      _(goal.subGoal).forEach(a => x += yesDone(a.done));


      var y = x/max * 100;

      return y;
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

      if (nextSlide.length === 0) {
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

      if (prevSlide.length === 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
      }

      currentSlide.fadeOut(600).removeClass('active-slide');
      prevSlide.fadeIn(600).addClass('active-slide');

      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
    });

  });

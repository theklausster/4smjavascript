'use strict';
angular.module('4smApp')
.factory('GoalLogic', function() {
    return {
        gStatus: function(goal) {
          function yesDone(subDone)
             {
                var doneSub = 0;
                if (subDone === true) {
                  doneSub += 1;
                }
                return doneSub;
              }

          var max = _.size(goal.subGoal);
          var x = 0;
          _(goal.subGoal).forEach(a => x += yesDone(a.done));


          var y = Math.floor(x / max * 100);

          return y;
        },
    };

});

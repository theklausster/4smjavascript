'use strict';

angular.module('4smApp')
  .factory('DialogService', function($mdDialog) {
    return {
      opendialog: function(goal){

        $mdDialog.show({
          clickOutsideToClose: true,
          templateUrl: 'app/my_directives/createEditDirective/dialog/dialog.html',
          locals:{ goal : goal
          },
          controller: 'dialogCTRL',
        });
      }

    };
    });

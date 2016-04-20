'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, GoalService) {
    this.$http = $http;
    this.GoalService = GoalService;
    this.awesomeThings = [];


    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }


    hello(){
      this.GoalService.jimmy(function(data){
        console.log('jimmy', data);
      });
    }



  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

}



angular.module('4smApp')
  .controller('MainController', MainController);

})();

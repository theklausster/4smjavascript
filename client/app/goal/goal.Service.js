'use strict';

angular.module('4smApp')
.factory('GoalService', function($resource){
return $resource('/api/goals/:id', {
    id: '@id'},
    { 'update': {method:'PUT'}, params:{ id:'@id' },
      jimmy: { url: '/api/goals/jimmy/',
       method:'GET', isArray: true},
    paged: {  method:'GET' },


   });


  });

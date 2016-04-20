'use strict';

angular.module('4smApp')
.factory('GoalService', function($resource){
return $resource('/api/goals/:id', {
    id: '@id'},
    { 'update': {method:'PUT'}, params:{ id:'@id' },
    paged: {  method:'GET' }
   });


  });

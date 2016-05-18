'use strict';

angular.module('4smApp')
  .factory('GoalService', function($resource) {
    return $resource('/api/goals/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      },
      params: {
        id: '@id'
      },
      sharedNew: {
        url: '/api/goals/sharedNew/',
        method: 'GET',
        isArray: true
      },sharedRandom: {
        url: '/api/goals/sharedRandom/',
        method: 'GET',
        isArray: true
      },sharedRated: {
        url: '/api/goals/sharedRated/',
        method: 'GET',
        isArray: true
      },
      paged: {
        method: 'GET'
      },
      getAllCategories: {
        url: '/api/categorys/',
        method: 'GET',
        isArray: true
      }
    });
  });

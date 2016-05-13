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
      },sharedRunning: {
        url: '/api/goals/sharedRunning/',
        method: 'GET',
        isArray: true
      },sharedWalking: {
        url: '/api/goals/sharedWalking/',
        method: 'GET',
        isArray: true
      },sharedPersonal: {
        url: '/api/goals/sharedPersonal/',
        method: 'GET',
        isArray: true
      },sharedIndoor: {
        url: '/api/goals/sharedIndoor/',
        method: 'GET',
        isArray: true
      },sharedOutdoor: {
        url: '/api/goals/sharedOutdoor/',
        method: 'GET',
        isArray: true
      },sharedCooking: {
        url: '/api/goals/sharedCooking/',
        method: 'GET',
        isArray: true
      },
      paged: {
        method: 'GET'
      },
    });

  });

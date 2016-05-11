/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Goal from '../api/goal/goal.model';
import Category from '../api/category/category.model';

Goal.find({}).removeAsync().then(() => {
  Goal.create({
    owner: '56dd37428f299f3008be7630',
    category: '56dd37428f299f3008be7639',
    name: 'Best rated',
    startDate: '2016-04-20',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 5,
    status: 33,
    subGoal: [{
      name: '1 km',
      done: true
    }, {
      name: '3 km',
      done: false
    }]
  });
});


var damn = [];
for (var i = 1; i < 200; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd37428f299f3008be7639',
    name: i + ' Run 10000000 km',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    status: 50,
    subGoal: [{
      name: '5 km',
      done: true
    }, {
      name: '10 km',
      done: false
    }]
  });
}
Goal.createAsync(damn).then(() => {
  console.log('200 Goals populated');
});

for (var i = 1; i < 2; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd37428f299f3008be7639',
    name: i + ' nyeste',
    startDate: '2016-04-22',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 4,
    status: 50,
    subGoal: [{
      name: '5 km',
      done: true
    }, {
      name: '10 km',
      done: false
    }]
  });
}
Goal.createAsync(damn).then(() => {
  console.log('2 Goals populated');
});

Category.find({}).removeAsync()
  .then(() => {
    Category.createAsync({
        _id: '56dd37428f299f3008be7639',
        name: 'Running'
      }, {
        _id: '56dd41b58d6566e00ab469da',
        name: 'Walking'
      })
      .then(() => {
        console.log('finished populating categories');
      });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        _id: '56dd37428f299f3008be7630',
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        _id: '56dd41b58d6566e00ab466da',
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });

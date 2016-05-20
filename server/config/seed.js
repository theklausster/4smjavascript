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
    isDone: false,
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
for (var i = 1; i < 20; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd37428f299f3008be7639',
    name: i + ' Run 20 km',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    isDone: false,
    subGoal: [{
      name: '2 km',
      done: true
    }, {
      name: '2 km',
      done: false
    }, {
      name: '2 km',
      done: false
    }, {
      name: '2 km',
      done: false
    }, {
      name: '2 km',
      done: false
    }]
  });
}


for (var i = 1; i < 20; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd41b58d6566e00ab469da',
    name: i + ' Walk 5 km',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    isDone: false,
    subGoal: [{
      name: '2.5 km',
      done: true
    }, {
      name: '2.5 km',
      done: false
    }]
  });
}

for (var i = 1; i < 20; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd41b58d6566e00ab489da',
    name: i + ' Loose 10 kg',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    isDone: false,
    subGoal: [{
      name: '5 kg',
      done: true
    }, {
      name: '5 kg',
      done: false
    }]
  });
}


for (var i = 1; i < 20; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd41b58d6566e00ab479da',
    name: i + ' Paint living Room twice',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    isDone: false,
    subGoal: [{
      name: 'Painted once',
      done: true
    }, {
      name: 'Painted twice',
      done: false
    }]
  });
}


for (var i = 1; i < 20; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd41b58d6566e00ab499da',
    name: i + ' Build 10 m fence',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    isDone: false,
    subGoal: [{
      name: '5 meter',
      done: true
    }, {
      name: '5 meter',
      done: false
    }]
  });
}


for (var i = 1; i < 20; i++) {
  damn.push({
    owner: '56dd37428f299f3008be7630',
    category: '56dd41b58d6566e00ab569da',
    name: i + ' Bake cakes',
    startDate: '2016-03-07',
    endDate: '2016-03-09',
    wantUpdate: true,
    updateInterval: 7,
    share: true,
    rate: 3,
    isDone: false,
    subGoal: [{
      name: '5 pcs',
      done: true
    }, {
      name: '5 pcs',
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
    isDone: false,
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
      }, {
        _id: '56dd41b58d6566e00ab489da',
        name: 'Personal'
      }, {
        _id: '56dd41b58d6566e00ab479da',
        name: 'Home Indoor'
      }, {
        _id: '56dd41b58d6566e00ab499da',
        name: 'Home Outdoor'
      }, {
        _id: '56dd41b58d6566e00ab569da',
        name: 'Cooking'
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

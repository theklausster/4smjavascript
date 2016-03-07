/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Goal from '../api/goal/goal.model';

Goal.find({}).removeAsync().
then(() => {
  Goal.create({
    owner: '56dd37428f299f3008be7630',
    name: 'Run 10000000 km',
    startDate: '2016-03-07T00:00:00.000Z',
    endDate: '2016-03-09T00:00:00.000Z',
    wantUpdat: true,
    updateInterval: 7,
    share : true,
    type: {
      name: 'Run',
      endGoal: '5 km',
      status: 0
    }
  },
  {
      owner: '56dd41b58d6566e00ab466da',
    name: 'Run 10 km',
    startDate: '2016-03-07T00:00:00.000Z',
    endDate: '2016-03-30T00:00:00.000Z',
    wantUpdat: true,
    updateInterval: 7,
    share : true,
    type: {
      name: 'Run',
      endGoal: '5 km',
      status: 0
    }
  },
  {
    owner: '56dd41b58d6566e00ab466da',
    name: 'Run 5 km',
    startDate: '2016-03-07T00:00:00.000Z',
    endDate: '2016-03-12T00:00:00.000Z',
    wantUpdat: true,
    updateInterval: 7,
    share : true,
    type: {
      name: 'Run',
      endGoal: '5 km',
      status: 0
  }
  });
});







Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
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
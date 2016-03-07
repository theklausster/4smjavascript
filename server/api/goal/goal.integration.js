'use strict';

var app = require('../..');
import request from 'supertest';

var newGoal;

describe('Goal API:', function() {

  describe('GET /api/goals', function() {
    var goals;

    beforeEach(function(done) {
      request(app)
        .get('/api/goals')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          goals = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      goals.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/goals', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/goals')
        .send({
          name: 'New Goal',
          info: 'This is the brand new goal!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newGoal = res.body;
          done();
        });
    });

    it('should respond with the newly created goal', function() {
      newGoal.name.should.equal('New Goal');
      newGoal.info.should.equal('This is the brand new goal!!!');
    });

  });

  describe('GET /api/goals/:id', function() {
    var goal;

    beforeEach(function(done) {
      request(app)
        .get('/api/goals/' + newGoal._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          goal = res.body;
          done();
        });
    });

    afterEach(function() {
      goal = {};
    });

    it('should respond with the requested goal', function() {
      goal.name.should.equal('New Goal');
      goal.info.should.equal('This is the brand new goal!!!');
    });

  });

  describe('PUT /api/goals/:id', function() {
    var updatedGoal;

    beforeEach(function(done) {
      request(app)
        .put('/api/goals/' + newGoal._id)
        .send({
          name: 'Updated Goal',
          info: 'This is the updated goal!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGoal = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGoal = {};
    });

    it('should respond with the updated goal', function() {
      updatedGoal.name.should.equal('Updated Goal');
      updatedGoal.info.should.equal('This is the updated goal!!!');
    });

  });

  describe('DELETE /api/goals/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/goals/' + newGoal._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when goal does not exist', function(done) {
      request(app)
        .delete('/api/goals/' + newGoal._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var goalCtrlStub = {
  index: 'goalCtrl.index',
  show: 'goalCtrl.show',
  create: 'goalCtrl.create',
  update: 'goalCtrl.update',
  destroy: 'goalCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var goalIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './goal.controller': goalCtrlStub
});

describe('Goal API Router:', function() {

  it('should return an express router instance', function() {
    goalIndex.should.equal(routerStub);
  });

  describe('GET /api/goals', function() {

    it('should route to goal.controller.index', function() {
      routerStub.get
        .withArgs('/', 'goalCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/goals/:id', function() {

    it('should route to goal.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'goalCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/goals', function() {

    it('should route to goal.controller.create', function() {
      routerStub.post
        .withArgs('/', 'goalCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/goals/:id', function() {

    it('should route to goal.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'goalCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/goals/:id', function() {

    it('should route to goal.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'goalCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/goals/:id', function() {

    it('should route to goal.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'goalCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

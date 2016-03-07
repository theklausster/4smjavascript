/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/goals              ->  index
 * POST    /api/goals              ->  create
 * GET     /api/goals/:id          ->  show
 * PUT     /api/goals/:id          ->  update
 * DELETE  /api/goals/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Goal from './goal.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}
function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


export function index(req, res) {
  Goal.find({}).populate('owner', 'name email')
    .execAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a list of Goals
//export function index(req, res) {
  //Goal.findAsync().populate('user', 'name')
    //.then(respondWithResult(res))
    //.catch(handleError(res));
//}

// Gets a single Goal from the DB
export function show(req, res) {
  Goal.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Goal in the DB
export function create(req, res) {
  Goal.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Goal in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Goal.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Goal from the DB
export function destroy(req, res) {
  Goal.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

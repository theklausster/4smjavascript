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


function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {;
  return function(entity) {
    var updated = _.extend(entity, updates);
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


// Gets a list of Goals
//export function index(req, res) {
  //Goal.findAsync().populate('user', 'name')
    //.then(respondWithResult(res))
    //.catch(handleError(res));
//}


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Creates a new Goal in the DB
export function create(req, res) {
  Goal.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Gets a single Goal from the DB
export function show(req, res) {
  Goal.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}



  export function index(req, res) {
    //Create the query
    var query = {};
    if(req.query.search && req.query.search.length > 0){
      query = {'title':new RegExp(req.query.search, 'i') };
    }


    //Make sure limit and page are numbers and above 1
    if(!req.query.limit || parseFloat(req.query.limit) < 1){
      req.query.limit = 25;
    }
    if(!req.query.page || parseFloat(req.query.page) < 1){
      req.query.page = 1;
    }

    //Create the offset (ex. page = 1 and limit = 25 would result in 0 offset. page = 2 and limit = 25 would result in 25 offset.)
    var offset = (req.query.page - 1) * req.query.limit;

    //Testing if offset is bigger then result, if yes set offset to zero
    Goal.count(query, function(err, count) {
        if(offset > count){
          offset = 0;
        }

        //Create object for pagination query
        var options = {
          select: 'owner name startDate endDate wantUpdate updateInterval share type subGoal',
          sort: req.query.sortBy,
          populate: {path: 'owner', select: 'name email'},
          offset: offset,
          limit: parseFloat(req.query.limit)
        };

        //Do the actual pagination
        Goal.paginate(query, options)
          .then(respondWithResult(res))
          .catch(handleError(res));
    });
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

export function getSharedTop5(req, res){
  return Goal.find({'share' : true}).sort({'startDate': -1}).limit(5)
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res)
);
}

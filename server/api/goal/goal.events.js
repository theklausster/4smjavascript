/**
 * Goal model events
 */

'use strict';

import {EventEmitter} from 'events';
var Goal = require('./goal.model');
var GoalEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GoalEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Goal.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GoalEvents.emit(event + ':' + doc._id, doc);
    GoalEvents.emit(event, doc);
  }
}

export default GoalEvents;

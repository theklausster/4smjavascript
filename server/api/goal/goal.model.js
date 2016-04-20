'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
paginater = require('mongoose-paginate'),
Schema = mongoose.Schema;

var GoalSchema = new mongoose.Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  name: String,
  startDate: Date,
  endDate: Date,
  wantUpdate: Boolean,
  updateInterval: Number,
  share: Boolean,
  type:{
    name: String,
    endGoal: String,
    status: Number
  },
  subGoal: [{
    name: String,
    done: Boolean
  }]
});

GoalSchema.plugin(paginater);

export default mongoose.model('Goal', GoalSchema);

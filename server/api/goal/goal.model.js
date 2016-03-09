'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
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
  }
});

export default mongoose.model('Goal', GoalSchema);

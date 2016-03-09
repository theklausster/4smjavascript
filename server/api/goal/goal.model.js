'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GoalSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
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
    status: String
  }
});

export default mongoose.model('Goal', GoalSchema);

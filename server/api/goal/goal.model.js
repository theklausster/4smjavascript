'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
paginater = require('mongoose-paginate'),
random =  require('mongoose-random'),
Schema = mongoose.Schema;

var GoalSchema = new mongoose.Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  category:{
    type: Schema.ObjectId,
    ref: 'Category'
  },
  name: String,
  startDate: Date,
  endDate: Date,
  wantUpdate: Boolean,
  updateInterval: Number,
  share: Boolean,
  rate:{ type: Number, min: 0, max: 5 },
  isDone: Boolean,
    subGoal: [{
    name: String,
    done: Boolean
  }]
});

GoalSchema.plugin(paginater)
GoalSchema.plugin(random);

export default mongoose.model('Goal', GoalSchema);

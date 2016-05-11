'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import {Schema} from 'mongoose';

var CategorySchema = new Schema({
  name: String,
  });


export default mongoose.model('Category', CategorySchema);

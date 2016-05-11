'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import {Schema} from 'mongoose';

var CategorySchema = new Schema({
  name: String,
  });

  CategorySchema
    .virtual('Category')
    .get(function() {
      return {
        'name': this.name,
        '_id': this._id,
      };
    });
export default mongoose.model('Category', CategorySchema);

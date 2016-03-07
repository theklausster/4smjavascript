'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/4sm-test'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};

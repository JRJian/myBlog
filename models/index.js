'use strict';

var mongoose = require('mongoose');
var user = require('./users');

mongoose.connect('mongodb://localhost/hello-world');

module.exports = {
  users: mongoose.model('users')
};
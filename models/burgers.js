
var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.getBurgers('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.addBurger('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.editBurger('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
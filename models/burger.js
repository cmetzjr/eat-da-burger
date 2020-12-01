//code from cats exercise (with modification)

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", res=> {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("burgers", ["newburger", "devoured"], [name, false], res=> {
      cb(res);
    });
  },

  // update: function(id, cb) {
  //   var condition = "id=" + id;
  //   orm.update("burgers", {devoured: true}, condition, cb);
  // }
};

module.exports = burger;

var Sequelize = require("sequelize")
var sequelize = require("../config/connection");


  var burgers = sequelize.define("burgers", {
  
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
  }, {
  
    freezeTableName: true
  });

  burgers.sync();

  module.exports = burgers;

var Sequelize = require("sequelize")
var sequelize = require("../config/connection");

// module.exports = function(sequelize, DataTypes) {
//     var Burger = sequelize.define("burger", {
//         burger_name: sequelize.STRING,
//         devoured: sequelize.BOOLEAN
//     });
//     return Burger;
// };
  // id int NOT NULL AUTO_INCREMENT,
	// burger_name varchar(255) NOT NULL,
	// devoured BOOLEAN DEFAULT false,
  // PRIMARY KEY (id)
  

  var burger = sequelize.define("burger", {
    //id: Sequelize.INTEGER,  
    name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
  }, {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  });
  // Syncs with DB
  burger.sync();
  // Makes the Character Model available for other files (will also create a table)
  module.exports = burger;
  // Export the database functions for the controller (burger8000Controller.js).
  // module.exports = burger;
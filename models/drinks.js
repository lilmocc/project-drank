// Model of our POST table. Includes a title, body, and category columns.
// see sequelize docs for further info on Model Defintion
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html

module.exports = function(sequelize, DataTypes) {
  var allDrinks = sequelize.define("Drinks", {
    drink_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    drink_name: DataTypes.STRING,
    glass_type: DataTypes.STRING
  });

  return allDrinks;
};

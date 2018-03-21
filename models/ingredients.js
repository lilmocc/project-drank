// Model of our POST table. Includes a title, body, and category columns.
// see sequelize docs for further info on Model Defintion
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html

module.exports = function(sequelize, DataTypes) {
  var allIngredients = sequelize.define("Ingredients", {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    ingredient_name: DataTypes.STRING,
    ingredient_type: DataTypes.STRING
  });

  return allIngredients;
};

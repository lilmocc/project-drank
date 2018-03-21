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

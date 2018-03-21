module.exports = function(sequelize, DataTypes) {
  var drinksIngredients = sequelize.define("Drinks_Ingredients", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    drink_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER
  });

  return drinksIngredients;
};

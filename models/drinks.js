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

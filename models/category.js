'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    img: DataTypes.STRING,
    text: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
  };
  return Category;
};
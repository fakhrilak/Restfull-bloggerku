'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    category: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Subcategory.associate = function(models) {
    // associations can be defined here
  };
  return Subcategory;
};
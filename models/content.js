'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    img: DataTypes.STRING,
    text: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Content.associate = function(models) {
    // associations can be defined here
  };
  return Content;
};
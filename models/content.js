'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Content.associate = function(models) {
    Content.belongsTo(models.Category, {
			as: 'category',
			foreignKey: {
				name: 'categoryId'
			}
		});
  };
  return Content;
};
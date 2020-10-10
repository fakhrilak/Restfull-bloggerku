'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {});
  Content.associate = function(models) {
    // associations can be defined here
    Content.belongsTo(models.User, {
			as: 'user',
			foreignKey: {
				name: 'userId'
			}
		});
  };
  return Content;
};
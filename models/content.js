'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    text: DataTypes.STRING,
    no: DataTypes.STRING,
    subcategoryId: DataTypes.INTEGER
  }, {});
  Content.associate = function(models) {
    Content.belongsTo(models.Subcategory, {
			as: 'subcategory',
			foreignKey: {
				name: 'subcategoryId'
			}
		})
  };
  return Content;
};
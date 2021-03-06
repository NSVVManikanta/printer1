var commonHelper = require("../../Helper");
module.exports = (sequelize, DataTypes) => {
  const printerGroups = sequelize.define(
    "PrinterGroups",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "c1",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "c2",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "c3",
      },
      printType: {
        type: DataTypes.ENUM(1, 2),
        allowNull: false,
        field: "c4",
      },
      printerCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "c5",
      },
      createdAt: {
        type: DataTypes.INTEGER,
        field: "c6",
      },
      updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "c7",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: "c8",
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "c9",
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        field: "c10",
      },
    },
    {
      tableName: "t109",
      // hasTrigger: true,
      hooks: {
        beforeCreate(printerGroupObject, options) {
          if (printerGroupObject)
            return (printerGroupObject.createdAt = commonHelper.getTimeStamp());
        },
        beforeUpdate(printerGroupObject, options) {
          if (printerGroupObject)
            return (printerGroupObject.updatedAt = commonHelper.getTimeStamp());
        },
      },
    }
  );
  printerGroups.associate = function (models) {
    printerGroups.hasMany(models.PrinterGroupTriggers, {
      foreignKey: "printerGroupId",
    }),
    printerGroups.belongsToMany(models.Printer, {
      through: models.PrinterGroupAssignment ,foreignKey: 'printerId' 
     });
  };
  return printerGroups;
};

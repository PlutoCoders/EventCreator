const { Model, DataTypes } = require(`sequelize`);
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      // what we need is to have the selector give us a value this date likes and put it in here for the value
      type: DataTypes.DATEONLY,
      // need to create selectable date (queryselector)
      allowNull: false,
    },
    user_id: {
      type: DataTypes.NUMBER,
      references: {
        model: `user`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;

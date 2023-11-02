const { Model, DataTypes } = require(`sequelize`);
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init({

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
        type: `Need to include Jquery Variable`,
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

        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    
});

module.exports = Event;
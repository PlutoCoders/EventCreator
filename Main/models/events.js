const { Model, Datatypes } = require(`sequalize`);
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    title: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    description: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    event_date: {
        type: `Need to include Jquery Variable`,
        // need to create selectable date (queryselector)
        allowNull: false,
    },
    user_id: {
        type: Datatypes.INTEGER,
        references: {
            model: `user`,
            key: `id`,
        },
    },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    
});

module.exports = Event;
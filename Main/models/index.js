const User = require('./User');
const Event = require('./events');

Event.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Event,
  };
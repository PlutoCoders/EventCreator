const sequelize = require('../config/connection');
const seeduserdata = require('./userData');
const seedeventdata = require('./eventData')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seeduserdata();

  await seedeventdata();

  process.exit(0);
};

seedDatabase();
const {Event} = require('../models')

const eventData =  [
    {
        "title": "Event 1",
        "description": "a basic description of the event",
        "event_date": "2024-01-10",
        "user_id": 1
    },
    {
        "title": "second Event",
        "description": "a basic description of the second event",
        "event_date": "2023-02-12",
        "user_id": 1
    },
    {
        "title": "Third Event",
        "description": "a basic description of the third event",
        "event_date": "2023-11-15",
        "user_id": 2
    }
]

const seedeventdata = () => Event.bulkCreate(eventData);
module.exports = seedeventdata;
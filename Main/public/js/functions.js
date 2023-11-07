const getEvent = async (id) => {
    console.log(`Get this event`, id);
    let frontEndFromServer = await fetch(`http://localhost:3306/api/events/${id}`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (frontEndFromServer.ok) {
        let eventToGet = await frontEndFromServer.json();
        console.log(`Event to Get`, eventToGet);
        return eventToGet;
    } else {
        console.log(`Could not find event`);
    }
}

const deleteEvent = async (id) => {
    console.log(`Delete this event`, id);
    let frontEndFromServer = await fetch(`http://localhost:3306/api/events/${id}`, {
        method: `DELETE`,
    });

    if (frontEndFromServer.ok) {
        let eventToDelete = await frontEndFromServer.json();
        console.log(`Event to Delete`, eventToDelete);
        return eventToDelete;
    } else {
        console.log(`Could not find event`);
    }
}

const deleteEventButtons = document.querySelectorAll(`.delete-event-button`);
deleteEventButtons.forEach(btn => {
    btn.addEventListener(`click`, deleteEventButtonClickEvent => {
        let extractedEventIDFromEvent = parseInt(deleteEventButtonClickEvent.target.id.split(`-`)[3]);
        // let extractedUserIDFromEvent = parseInt(deleteEventButtonClickEvent.target.id.split(`-`)[6]);
        getEvent(extractedEventIDFromEvent);
        // deleteEvent(extractedEventIDFromEvent);
    })
})
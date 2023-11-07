const newFormHandler = async (event) =>{
    event.preventDefault();

    const title = document.querySelector('input[name="event-title"]').value;
    const description = document.querySelector('input[name="event-description"]').value;
    const event_date = document.querySelector('#datepicker').value;
  
    const response = await fetch(`/api/events/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        event_date
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      const eventToCreate = await response.json();
        document.location.replace('/');
        return eventToCreate;
      } else {
        alert('Failed to create event');
      }
    }
const delFormHandler = async (event) =>{
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/events/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to delete project');
        }
      }

}
const upddateFormHandler = async (event) =>{
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

    await fetch(`/api/events/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          description,
          date
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to upddate event');
        }
    }
};

  let eventForm = document.querySelector('.neweventform');
  if (eventForm) eventForm.addEventListener('submit', newFormHandler);

  let eventList = document.querySelector('.delete-event-button');
  if (eventList) eventList.addEventListener('click', delFormHandler);

  let updateEventForm = document.querySelector('#updateeventform');
  if (updateEventForm) updateEventForm.addEventListener('submit', upddateFormHandler);

  $(document).ready(function() {
    console.log(`Ready`);
    $('#datepicker').datepicker({
      dateFormat: 'yy-mm-dd', // Set the date format
      minDate: 0,             // Allow only future dates
      maxDate: '+1M',         // Allow dates within the next month
      showButtonPanel: true   // Show "Today" and "Done" buttons
    });
  });
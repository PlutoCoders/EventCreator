const newFormHandler = async (event) =>{
    event.preventDefault();

    const title = document.querySelector('input[name="event-title"]').value;
    const description = document.querySelector('textarea[name="event-description"]').value;
    //const date = document.querySelector('where the calander appears and what is selected').value;
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        //date
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
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

document
  .querySelector('.neweventform')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.eventlist')
  .addEventListener('click', delFormHandler);

  document
  .querySelector('#updateeventform')
  .addEventListener('submit', upddateFormHandler);
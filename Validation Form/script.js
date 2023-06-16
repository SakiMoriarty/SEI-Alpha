document.querySelectorAll('form').addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        email: document.querySelector('#email').value,
        name: document.querySelector('#name').value,
        comment: document.querySelector('#message').value
    }

    sendForm(data);
});

async function sendForm(data){
    const res = await fetch('./feedback.php', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if(res.status == 201){
        alert(`Successful ${result.message}`)
    }
    else{
        alert('Something went wrong');
    }
}
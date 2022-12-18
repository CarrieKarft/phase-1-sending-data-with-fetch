// Add your code here
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(res => res.json())
    .then(data => {
        appending(data.id)
        console.log(data.id)
    })
    .catch(err => {
        errMessage(err.message)
        alert('darn!')
    })
};

function appending(idValue) {
    const p = document.createElement('p');
    p.innerHTML = idValue;
    document.body.appendChild(p);
}

function errMessage(errValue) {
    const p = document.createElement('p');
    p.innerHTML = errValue;
    document.body.appendChild(p);
}
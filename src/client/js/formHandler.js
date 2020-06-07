function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let userInput = {
        input: formText
    };
    fetch('/testing', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(userInput),
        headers: {"Content-Type": "application/json"},
    },)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res;
    })
}

export { handleSubmit }


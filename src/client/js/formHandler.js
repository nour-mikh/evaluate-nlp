function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let userInput = {
        input: formText
    };
    callApi(userInput);
}

function callApi(userInput) {
    let formText = document.getElementById('name').value
    fetch('/test', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(userInput),
    headers: {"Content-Type": "application/json"},
},)
.then(res => res.json())
.then(function(res) {
    console.log(res);
    document.getElementById('text').innerHTML ='Text: ' + formText;
    document.getElementById('polarity').innerHTML = 'Polarity: ' + res.polarity;
    document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
})
}

export { 
    handleSubmit, 
    callApi
}



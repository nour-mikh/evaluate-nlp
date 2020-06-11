function checkForName(inputText) {
    // check if user input is text
    if (!isNaN(inputText)) 
  {
    alert("You must input text, the results you might seeing don't make sense");
    return "not a number"
}
}

export { checkForName }

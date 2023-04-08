function displayMinute() {
    // Create a new Date object
    const currentDate = new Date();
    // Get the current minute
    const currentMinute = currentDate.getMinutes();
    // Get the div where we will display the minute
    const minuteDiv = document.getElementById("minuteDiv");
    // Set the text of the div to the current minute
    minuteDiv.innerText = `The current minute is: ${currentMinute}`;
  }
  
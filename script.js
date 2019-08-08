/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

// Sets up variables; stores HTML elements inside of them.
let userInput = document.querySelector("#userInput")
let pictureBox = document.querySelector("#pictureBox")

// Logs the variables, to confirm whether they worked.
console.log(userInput)
console.log(pictureBox)

// Adds the event, so that when you type (input), it fires the event.
userInput.addEventListener("input", (e) => {
  // Logs the CONTENTS of the input element.
  console.log(userInput.value)
  // Compares what the user typed to the string "Eleven", 
  // and fires the code block if it matches.
  if (userInput.value == "Eleven") {
    console.log("YOU GOT IT!")
    // Shows the photo (adds an image element to the pictureBox)
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.11%20AM.png?v=1565269664594"/>`
  } else if (userInput.value == "Dustin") {
    pictureBox.innerHTML += `<img src = "https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.21%20AM.png?v=1565269664037"/>`
  } else if (userInput.value == "Mike") {
    
  }
})
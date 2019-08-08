/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

let userInput = document.querySelector("#userInput")
let pictureBox = document.querySelector("#pictureBox")

console.log(userInput)
console.log(pictureBox)

userInput.addEventListener("input", (e) => {
  console.log(userInput.value)
  if (userInput.value == "Eleven") {
    console.log("YOU GOT IT!")
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.11%20AM.png?v=1565269664594"/>`
  } else if (userInput.value == "Dustin") {
    pictureBox.innerHTML += `<img src = "https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.21%20AM.png?v=1565269664037"/>`
  } else if (userInput.value == "Mike") {
    
  }
})
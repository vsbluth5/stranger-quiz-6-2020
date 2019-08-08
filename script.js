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
    pictureBox.innerHTML 
  }
})
/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

let userInput = document.querySelector("#userInput")

console.log(userInput)

userInput.addEventListener("input", (e) => {
  console.log("event firing")
})
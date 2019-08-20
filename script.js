/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi jeff');

const textbox = document.querySelector("#userInput")
console.log(textbox)

const pictureBox = document.querySelector("#pictureBox")
console.log(pictureBox)

textbox.addEventListener("input", (e)=> {
  console.log("Key pressed!")
  console.log(textbox.value)
  if (textbox.value === "Eleven"){
    console.log("YOU WIN!")
    pictureBox.innerHTML += '<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.11%20AM.png?v=1565269664594"/>'
  }
})
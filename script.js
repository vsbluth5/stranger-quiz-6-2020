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
})
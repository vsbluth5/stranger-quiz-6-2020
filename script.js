/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

let inputBox = document.querySelector('input')

console.log(inputBox)

inputBox.addEventListener("input", (e) => {
  console.log(inputBox.value)
  inputBox.value = ""
})
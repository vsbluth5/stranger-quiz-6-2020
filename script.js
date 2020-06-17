/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Script Running');

// Select the input element using its id, and store that in a variable called textbox
const textbox = document.querySelector("#userInput")

// Log that element to the console just to confirm the query selector worked.
console.log(textbox)

// textbox and #userInput refer to the same thing. The code in this file
// refers to that html element as textbox from now on.

// Challenge: There is one other element in the html that this file will l
// need to refer to. What is it?

const pictureBox = document.querySelector("#pictureBox")
console.log(pictureBox)




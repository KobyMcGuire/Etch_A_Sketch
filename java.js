
 let container = document.querySelector(".container");
 let button = document.querySelector(".button");
 
 
 function changeBoxSize (userInput) {
   container.textContent = ''
   for (i = 0; i < userInput; i++) {
      let box = container.appendChild(document.createElement("div"));
      box.className = "box";
   }
 }


 


 // Adding Event listeners to boxes
 let boxes = document.querySelectorAll(".box");
 for (const box of boxes) {
    box.addEventListener("click", function onClick(){
        console.log("Box clicked");
        box.style.backgroundColor = "black";
    })
 }

 //Changing the box size according to user input
 button.addEventListener("click", function() {
   let userInput = window.prompt("What would you like to change the size to?");
   let area = Math.sqrt(userInput);
   changeBoxSize(userInput);
   container.style.gridTemplateColumns = `repeat(${area}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${area}, 1fr)`;
 })
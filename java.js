
 let container = document.querySelector(".container");
 let buttonSize = document.querySelector(".buttonSize");
 let buttonClear = document.querySelector(".buttonClear");
 
 

 //Changing the amount of boxes in the grid
 function changeBoxAmount (userInput) {
   container.textContent = ''
   for (i = 0; i < userInput; i++) {
      let box = container.appendChild(document.createElement("div"));
      box.className = "box";
   }
   updateBoxes();
 }

 // Adding Event listeners to boxes
 function updateBoxes() {
 let boxes = document.querySelectorAll(".box");
 for (const box of boxes) {
    box.addEventListener("click", function onClick(){
        console.log("Box clicked");
        box.style.backgroundColor = "black";
    })
 }
}

//Helper function to clear the color in boxes
function clearColor(item) {
  item.style.backgroundColor = "white";
}

 //Changing the box size according to user input
 buttonSize.addEventListener("click", function changeBoxSize() {
   let userInput = window.prompt("What would you like to change the size to?");
   let area = Math.sqrt(userInput);
   changeBoxAmount(userInput);
   container.style.gridTemplateColumns = `repeat(${area}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${area}, 1fr)`;
 })


 //Clearing coloring using event listeners
 buttonClear.addEventListener("click", function clear() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach(clearColor);
 })

 let container = document.querySelector(".container");
 let buttonSize = document.querySelector(".buttonSize");
 let buttonClear = document.querySelector(".buttonClear");
 let buttonDraw = document.querySelector(".buttonDraw");
 let buttonErase = document.querySelector(".buttonErase");
 let draw = false;
 let erase = false;

 
 

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
      if (draw === true) {
        box.style.backgroundColor = "black";
      }
      if (erase === true) {
        box.style.backgroundColor = "white";
      }
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


 // Event listeners that switch Draw and Erase on / off
 buttonDraw.addEventListener("click", function() {
  draw = true;
  erase = false;
  buttonDraw.classList.add("active");
  buttonErase.classList.remove("active");
 })

 buttonErase.addEventListener("click", function() {
  erase = true;
  draw = false;
  buttonErase.classList.add("active");
  buttonDraw.classList.remove("active");
 })
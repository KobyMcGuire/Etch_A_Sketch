 let container = document.querySelector(".container");

 for (i = 0; i < 16; i++) {
    console.log("count")
    let box = container.appendChild(document.createElement("div"));
    box.className = "box";
 }
 
 let boxes = document.querySelectorAll(".box");

 for (const box of boxes) {
    box.addEventListener("click", function onClick(){
        console.log("Box clicked");
        box.style.backgroundColor = "black";
    })
 }
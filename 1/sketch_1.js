
let Almacolor; 
let colores = ["red", "green", "blue"]; 

function setup() {
  createCanvas(500, 420); 
  Almacolor = colores[0]; 
  setInterval(changeColor, 2000);
}

function draw() {
  background(1); 
  fill(Almacolor); 
  rect(35, 50, 420, 300);
}

function changeColor() {
  let index = colores.indexOf(Almacolor);
  index = (index + 1) % colores.length;
   Almacolor = colores[index];
}

let Arañauwu;
let posX = 200;
let posY = 200;
let speed = 5;
let izq = false;
let der = false;
let arr = false;
let aba = false;

function preload() {
  Arañauwu = loadImage('spidermanicon.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0); 
  
  image(Arañauwu, posX, posY, 100, 100);

  if (izq == true){
    posX -= speed;   
  }
  if (der == true){
    posX += speed; 
  }
  if (arr == true){
    posY -= speed;
  }
  if (aba == true){
    posY += speed;
  }
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || key === 'a') {
    izq = true;
  } 
  if (keyCode === RIGHT_ARROW || key === 'd') {
    der = true;
  } 
  if (keyCode === UP_ARROW || key === 'w') {
    arr = true;
  } 
  if (keyCode === DOWN_ARROW || key === 's') {
    aba = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || key === 'a') {
    izq = false;
  } 
  if (keyCode === RIGHT_ARROW || key === 'd') {
    der = false;
  } 
  if (keyCode === UP_ARROW || key === 'w') {
    arr = false;
  } 
  if (keyCode === DOWN_ARROW || key === 's') {
    aba = false;
  }
}

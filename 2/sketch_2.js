let angulo = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(1);
  translate(width / 2, height / 2);
  stroke(0);
  strokeWeight(5);

  
  let x2 = 100 * cos(angulo);
  let y2 = 100 * sin(angulo);
  
  stroke(255, 0, 0);
  line(0, 0, x2, y2);
  
  angulo += radians(1);
}

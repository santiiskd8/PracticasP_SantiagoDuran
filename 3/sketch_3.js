let angulo = 0; // Representa el angulo de las lineas
let historial = []; // Recompila informacion sobre las lineas.

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220); // gris

  translate(width / 2, height / 2); // Hace que las cordenadas x e y esten en el centro del lienzo

  // Recorre el array "historial" de manera inversa es decir calcula el ultimo elemento. basicamente el for elimina las lineas.
  for (let i = historial.length - 1; i >= 0; i--) {
    let deltaTime = millis() - historial[i][3]; // Calcula el tiempo transcurrido desde que se dibujó la linea actual. millis() sirve para calcular los segundos desde que se inicio el programa
    if (deltaTime < 2000) { //si el tiempo es menor a 2 segundos:
      let opacidad = map(deltaTime, 0, 2000, 255, 0); //Muestra en pantalla una opacidad que va bajando gradualmente
      stroke(historial[i][2], opacidad); // Establece el color de trazo con opacidad para la linea actual.
      strokeWeight(5); // Grosor de la linea
      line(historial[i][0], historial[i][1], 0, 0); // Dibuja una linea desde las coordenadas guardadas en historial a (0,0).
    }
    else {
      historial.splice(i, 1); // Elimina la linea :(
    }
  }

  let x2 = 100 * cos(angulo); // Calcula la coordenada x del extremo de la nueva linea. "cos":funcion trigronometrica
  let y2 = 100 * sin(angulo); // Calcula la coordenada y del extremo de la nueva linea. "sin"::funcion trigronometrica
  historial.push([x2, y2, color(random(255), random(255), random(255)), millis()]); // Colores randoms y el tiempo actual.
  
  stroke(0); // linea negra
  strokeWeight(4); // grosor de 4
  line(0, 0, x2, y2); // Dibuja la nueva línea desde el origen hasta (x2, y2).

  angulo += radians(1); // Incrementa el angulo en 1 grado para girar las lineas continuamente
}

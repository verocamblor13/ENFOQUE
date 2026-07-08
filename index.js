let normal;
let myImput;
let msg
let g 
let col1
let col2
let pulso = 0;
let velocidad = 0.125
let c
let points
let select
let election
let direction = 1;
let textLayer;

function preload() {
  enfoque = loadFont('/assets/ENFOQUE.ttf');
}

//function mousePressed() {
   //if (col1 === "black") {
    //col1 = "grey";
    //col2 = "black";
 // } else {
    //col1 = "black";
    //col2 = "grey";
  //}
//}

function setup() {

  createCanvas(windowWidth, windowHeight);
  textLayer = createGraphics(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
  noStroke();
 

  sliderBg = createSlider(0, 50, 0); // interletra
sliderBg.position(windowWidth/2-140, windowHeight/2+230);

slider = createSlider(0, 8, 0); // blur
slider.position(windowWidth/2+10, windowHeight/2+230);

  
  myImput = createInput('enfoque')
  
  myImput.position(windowWidth/2-60, windowHeight/2+190)
 
  col1 = "black"
  col2 = "grey"

}


function draw() {
  
  g = -sliderBg.value ()
  msg = myImput.value()

 
  
  drawGradientBackground()

// LIMPIAR CAPA DE TEXTO
textLayer.clear();

textLayer.fill(170, 184, 194);
textLayer.noStroke();
textLayer.textSize(100);
textLayer.textAlign(CENTER, CENTER);
textLayer.textFont(enfoque);

let tracking = sliderBg.value();

// DIBUJAR TEXTO CON INTERLETRA
drawTrackingTextLayer(
  textLayer,
  msg,
  width / 2,
  height / 2,
  tracking
);

// APLICAR BLUR SOLO A LA CAPA
if (slider.value() > 0) {
  textLayer.filter(BLUR, slider.value());
}

// MOSTRAR CAPA
image(textLayer, 0, 0);

  pop()
  

  let d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
  let maxDist = dist(0, 0, windowWidth / 2, windowHeight / 2);
  let size = map(d, maxDist, 0, 10, 30);

  pulso += velocidad;
  if (pulso > 10 || pulso < 0) {
    velocidad = -velocidad;
  }


  push();
  fill(74, 88, 101)
  textAlign(CENTER, CENTER)
  textStyle(BOLD);
  textSize(13);
  text("enfoque       2026", width / 2, height / 2 - 250);
  pop();

  //push();
  //textStyle(NORMAL);
  //textSize(13);
  
  //textAlign(RIGHT, TOP);

  //text("Hernández | Camblor | Schwarzbaum", windowWidth - 60, 40);
  //pop();
  
   

push();


}

function drawGradientBackground() {

  background(74, 88, 101);

  push();

  translate(width / 2, height / 2);

  let rx = width * 0.9 + sin(frameCount * 0.01) * 100;
  let ry = height * 2.8 + cos(frameCount * 0.012) * 60;

  noStroke();

  // Desenfoque
  drawingContext.filter = "blur(280px)";

  fill(25, 23, 23);

  ellipse(0, 0, rx, ry);

  // Importante: restaurar el filtro
  drawingContext.filter = "none";

  pop();
}


function drawTrackingTextLayer(pg, str, x, y, spacing) {

  let totalWidth = 0;

  for (let i = 0; i < str.length; i++) {
    totalWidth += pg.textWidth(str[i]) + spacing;
  }

  totalWidth -= spacing;

  let currentX = x - totalWidth / 2;

  for (let i = 0; i < str.length; i++) {

    pg.text(
      str[i],
      currentX + pg.textWidth(str[i]) / 2,
      y
    );

    currentX += pg.textWidth(str[i]) + spacing;
  }
}


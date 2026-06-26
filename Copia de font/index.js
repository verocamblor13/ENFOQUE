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

function mousePressed() {
   if (col1 === "black") {
    col1 = "grey";
    col2 = "black";
  } else {
    col1 = "black";
    col2 = "grey";
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  textLayer = createGraphics(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
  noStroke();
  noCursor()

  sliderBg = createSlider(0, 50, 0); // interletra
sliderBg.position(windowWidth/2-140, windowHeight/2+230);

slider = createSlider(0, 8, 0); // blur
slider.position(windowWidth/2+10, windowHeight/2+230);

  
  myImput = createInput('enfoque')
  
  myImput.position(windowWidth/2-60, windowHeight/2+190)
 
  col1 = "grey"
  col2 = "black"


  
}


function draw() {
  
  g = -sliderBg.value ()
  msg = myImput.value()

 
  
  background(col1);

// LIMPIAR CAPA DE TEXTO
textLayer.clear();

textLayer.fill(col2);
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
  textAlign(LEFT, TOP)
  textStyle(BOLD);
  textSize(13);
  text("enfoque       2026", 50, 40);
  pop();

  push();
  textStyle(NORMAL);
  textSize(13);
  
  textAlign(RIGHT, TOP);

  text("Hernández | Camblor | Schwarzbaum", windowWidth - 60, 40);
  pop();
  
   

push();

noFill();

for (let i = 0; i < 15; i++) {

  stroke(255, 20);

  strokeWeight(2);

  ellipse(
    mouseX,
    mouseY,
    size * 3 + i,
    size * 3 + i
  );

  drawingContext.shadowBlur = 2;

}

pop();

}

function mousecruz(x, y){
  translate(x, y)
  strokeCap(SQUARE)
  blendMode(BLEND)
  stroke(col1)
  strokeWeight(2)
  line (-5, 0, 5, 0)
  line (0, -5, 0, 5)

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


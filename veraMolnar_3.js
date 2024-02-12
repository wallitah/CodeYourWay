/*  
   veraMolna_3.js
   This is a sketch for Code Your Way inspired by Vera Molnar's work.
   
   @wallitah
 */ 


let colWidth;
let rowHeight;
let w = 15;
let h = 100;
let currentColor;

let greenColors = [
  [128, 128, 0],
  [107, 142, 35],
  [34, 139, 34],
  [60, 179, 113],
  [46, 139, 87],
];

function setup() {
  createCanvas(400, 400);
  background(250, 240, 230);
  createCanvas(windowWidth, windowHeight);
  noStroke();

  const colorButton = createButton("change color");
  colorButton.position(20, 20);
  colorButton.mousePressed(changeColor);
}

function draw() {
  background(220);
  background(255, 248, 220);
  rectMode(CENTER);
  translate(150, 150);
  colWidth = min(width / 39, height / 39);
  rowHeight = height / 3;
  fill(currentColor || [46, 139, 87]);
  for (let x = 0; x < width - 300; x += colWidth) {
    for (let y = 0; y < height / 2; y += rowHeight - 315) {
      y += 200 + random(-20, 20);
      rect(x, y - 150, w, h);
    }
  }
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function changeColor() {
  const randomIndex = floor(random(greenColors.length));
  currentColor = greenColors[randomIndex];
  loop();
}

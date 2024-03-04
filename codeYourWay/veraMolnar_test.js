/* 
    codeYourWay_001.js test file 

    @wallitah 

*/ 

let newLines = [];
let cols = 19;
let rows = 3;

let currentColor = [
  [128, 128, 0],
  [107, 142, 35],
  [34, 139, 34],
  [60, 179, 113],
  [46, 139, 87],
];

function setup() {
  noLoop();
  createCanvas(1100, 650);
  background(250, 240, 230);
  rectMode(CENTER);
  drawRectangles();
}

function draw() {
  drawManyRectangles();
}

function drawManyRectangles() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (width / 19) - (width/20);
      let y = i * (height / 3);
      let veraRect = new VeraRect(x, y, width / 4, height / 1.5, currentColor);
      veraRect.drawAt(x, y);
    }
  }
}

function drawRectangles() {
  background(250, 240, 230);
}

class VeraRect {
  constructor(x, y, w, h, currentColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.currentColor = currentColor;
  }
  getRandomColor() {
    let index = Math.floor(Math.random() * this.currentColor.length);
    return this.currentColor[index];
  }
  drawAt(x, y) {
    push();
    translate(x, y);
    this.show();
    pop();
  }
  show() {
    for (let i = 0; i < this.h; i += 2) {
      let alpha = random(50, 150);
      let weight = random(0.5, 2);
      let color = this.getRandomColor();
      stroke(color[0], color[1], color[2], alpha);
      strokeWeight(weight);
      let noiseFactor = -0.05;
      let noiseShift = noise(i * noiseFactor) * 10 - 5;
      line(this.x + noiseShift - this.w / 8,
        i,this.x + noiseShift + this.w / 5,
        i
      );
    }
  }
}

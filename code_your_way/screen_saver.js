/*  
    screen_saver.js

    @wallitah 

    click on the screen add more shapes :

*/ 

let numberOfShapes = 15;
let minSize = 5;
let maxSize = 150;
let shapes = [];

class flowerShape {
  constructor(x,y,radius) {
  this.x = x;
  this.y = y;
  this.r = radius;
  this.phase = 0;
  this.angle = 0;
  this.colors = [
  "#F68baa8ff",
  "#5474b6ff",
  "#a4bed3ff",
  "#e6c342ff",
  "#e38a37ff",
  ]; 
    
this.currentColor = this.colors[int(random(this.colors.length))]; 
} 
    
drawShape () {
  push(); 
  translate(this.x, this.y);
  rotate(this.angle);
  let c = color(this.currentColor);
  stroke(c.levels[0], c.levels[1], c.levels[2], 20);
  strokeWeight(6);
  noFill();
  let increment = TWO_PI / 45;
  beginShape();
  
  for(let a = 0; a < TWO_PI; a+= increment) {
    let ang = map(a, 0, 300, 0, TWO_PI);
    let r1 = this.r + sin(a * 10 + this.phase) * 25;
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    curveVertex(x,y);
  }
  endShape(CLOSE); 
  pop(); 
  this.phase += 0.05;
  }
  
  randomize () {
    this.r = random(minSize, maxSize);
    this.angle = random(TWO_PI);
    this.currentColor= this.colors[int(random(this.colors.length))];
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  shapes = [];
  for (let i=0; i < numberOfShapes; i++) {
    let radius = random(minSize, maxSize);
    shapes.push(new flowerShape(random(width), random(height), radius));
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

function draw() {
  background(5,10);
  for(let shape of shapes) {
    shape.drawShape();
  }
} 

function mousePressed() {
  let radius = random(minSize, maxSize);
  shapes.push(new flowerShape(mouseX, mouseY, radius));
} 
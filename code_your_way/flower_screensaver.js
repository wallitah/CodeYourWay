/* flower_screensaver.js 

    @wallitah

    This is a refactored version of a p5.js sketch from a previous exercise for my class Code Your Way at ITP, NYU
    When loaded, click on the screen to add more shapes! 
*/ 

// Variables which set the number of shapes and their minimum / maximum sizes
let numberOfShapes = 15;
let minSize = 5;
let maxSize = 150;

// An empty array that will store the randomly created shapes
let shapes = [];

// A class that creates a blueprint for the shapes. It defines the shapes' size (radius), position on the canvas, their rotation angle, and outline color. 
class flowerShape {
  constructor(x, y, radius) {
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

    // Randomly selects one of the five colors from the colors array. Uses int() to ensure a whole number is used for selecting an index from the colors array. 
    this.currentColor = this.colors[int(random(this.colors.length))]; 
} 

// A method that draws the shape based on its position, rotation angle, and color.
drawShape () {
  push(); 
  translate(this.x, this.y);
  rotate(this.angle);
  let c = color(this.currentColor);

  // The shape's color is set using p5's stroke method. The color's RGBA values are extracted from the selected color.
  stroke(c.levels[0], c.levels[1], c.levels[2], 20);
  strokeWeight(6);
  noFill();
  let increment = TWO_PI / 45;
  beginShape();
  
  // Iterates 360 degrees around a circle using the radius (this.r) as the base radius. Adds a wave-like texture to the shape. 
  for(let a = 0; a < TWO_PI; a+= increment) {
    let r1 = this.r + sin(a * 10 + this.phase) * 25;
    
    // Determines the x and y positions to form the flower's overall shape. 
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    
    // Creates a curved line using the x and y positions. 
    curveVertex(x,y);
  }
  endShape(CLOSE); 
  pop(); 
  
  // This.phase adjusts the appearance of the flowerShape spinning. 
  this.phase += 0.05;
  }
  
  // Randomizes the size, angle, and color of each new flowerShape. 
  randomize () {
    this.r = random(minSize, maxSize);
    this.angle = random(TWO_PI);
    this.currentColor= this.colors[int(random(this.colors.length))];
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  shapes = [];
  
  // Initializes the canvas with a specified number of shapes at random positions. 
  for (let i=0; i < numberOfShapes; i++) {
    let radius = random(minSize, maxSize);
    shapes.push(new flowerShape(random(width), random(height), radius));
  }
}

// Dynamically resizes the canvas to fit the window. 
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

function draw() {
  background(5,10);
  // Iterates over each shape in the shapes array and calls its drawShape method. 
  for(let shape of shapes) {
    shape.drawShape();
  }
} 

// Adds a new flowerShape at the mouse position on mouse press.
function mousePressed() {
  let radius = random(minSize, maxSize);
  shapes.push(new flowerShape(mouseX, mouseY, radius));
} 
/* flower_screensaver.js 

    @wallitah

    This file features refactoring and commenting, from a previous exercise for my class, Code Your Way. 

   Click on the screen to add more shapes :) ! 
*/ 


// set variables for the number of shapes, and the minimum and maximum size of the shapes 
let numberOfShapes = 15;
let minSize = 5;
let maxSize = 150;

// create an empty array of shapes to store the shapes that are randomly created
let shapes = [];

// create a class for the flowerShape which defines all of its basic attributes 
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

// this expression defines this.currentColor, by using random() to randomly select one of the five colors and uses int() to select an integer from this.
this.currentColor = this.colors[int(random(this.colors.length))]; 
} 
// this is a method in the flowerShape class, which defines how the shape will appear and uses several vertexes translated and rotated at random to determine it's positon and angles of rotation 
drawShape () {
  push(); 
  translate(this.x, this.y);
  rotate(this.angle);
  let c = color(this.currentColor);
  // the value of the stroke color is determined by using p5's color object and selecting an integer between 0-255 to extract the R,G,B,A values from this.currentColor to use for the stroke 
  stroke(c.levels[0], c.levels[1], c.levels[2], 20);
  strokeWeight(6);
  noFill();
  let increment = TWO_PI / 45;
  beginShape();
  
  // this for loop increments 360 degrees around a circle using this.r as the base radius of the circle 
  for(let a = 0; a < TWO_PI; a+= increment) {

  // sin adds to the "wave texture of the shape, a*10 adjusts how many waves are created, and this.phase increments the wave over time making it "wave", and the *25 determines how far out the wave expands  
    let ang = map(a, 0, 300, 0, TWO_PI);
    let r1 = this.r + sin(a * 10 + this.phase) * 25;
    // cos(a) and cos(b) determine the x and y position to form the flowers overall shape 
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    // this draws a curved lined from the x and y points above, instea of a straight line 
    curveVertex(x,y);
  }
  endShape(CLOSE); 
  pop(); 
  // this is the amount by which the flowerShape oscillates in the "wave" like form 
  this.phase += 0.05;
  }
  
  // this function takes a random number to determine the size, angle, and color of each new flowerShape created
  randomize () {
    this.r = random(minSize, maxSize);
    this.angle = random(TWO_PI);
    this.currentColor= this.colors[int(random(this.colors.length))];
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  shapes = [];
  
  // this for loop determines how many shapes are drawn on the canvas load. The empty shapes array calls .push to add a new flowerShape, with random parameters 
  for (let i=0; i < numberOfShapes; i++) {
    let radius = random(minSize, maxSize);
    shapes.push(new flowerShape(random(width), random(height), radius));
  }
}

// this function ensures the canvas is resized according to the size of the browser window
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}


function draw() {
  background(5,10);
  // this for loop ? 
  for(let shape of shapes) {
    shape.drawShape();
  }
} 

// this function calls the shapes array, in order to add a new flowerShape to the canvas wherever the canvas is clicked
function mousePressed() {
  let radius = random(minSize, maxSize);
  shapes.push(new flowerShape(mouseX, mouseY, radius));
} 
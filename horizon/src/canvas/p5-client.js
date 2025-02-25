/// GOAL: Let's do a Paralax like for the background of Horizon
/// How do it, look this example of
/// By Greg Benedis-Grab, Layla Quiñones
/// Example of use of P5 library

// My canvas
let canvas;

//variables for color change
let redVal = 0;
let greenVal = 0;

//variable for sun position
let sunHeight = 600; //stopping point below horizon

function setup() {
    canvas = createCanvas(600, 400);
    canvas.elt.id = 'p5-canvas'; // Set the ID on the canvas element
    canvas.parent('canvas-container'); // Add canvas to the div

    noStroke();
}

function draw() {
    //fill background with color based on custom variable values
    background(redVal, greenVal, 0);

    //sun
    fill(255, 135, 5, 60);
    circle(300, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(300, sunHeight, 140);

    //mountains
    fill(110, 50, 18);
    triangle(200, 400, 520, 253, 800, 400);
    fill(110, 95, 20);
    triangle(200, 400, 520, 253, 350, 400);

    fill(150, 75, 0);
    triangle(-100, 400, 150, 200, 400, 400);
    fill(100, 50, 12);
    triangle(-100, 400, 150, 200, 0, 400);

    fill(150, 100, 0);
    triangle(200, 400, 450, 250, 800, 400);
    fill(120, 80, 50);
    triangle(200, 400, 450, 250, 300, 400);

    // reduce sunHeight by 2 until it reaches 140 
    if (sunHeight > 130) {
        sunHeight -= 2;

        // modify custom variables for sky color during sunrise
        if (sunHeight < 480) {
            redVal += 4;
            greenVal += 1;
        }
    }
    if (mouseIsPressed === true && sunHeight === 130) {
        background(0);
    }
}

let canvas;

function setup() {
    canvas = createCanvas(800, 600);
    canvas.elt.id = 'p5-canvas'; // Set the ID on the canvas element
    canvas.parent('canvas-container'); // Add canvas to the div
}

function draw() {
    background(500);
    ellipse(mouseX, mouseY, 30, 30);
}

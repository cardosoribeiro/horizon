/// GOAL: Let's use this as Background of Horizon
/// How do it? look this example of
/// By Greg Benedis-Grab, Layla Quiñones
/// Example of use of P5 library

let canvas;
let pageWidth;
let pageHeight;
let redVal = 20;
let greenVal = 0;
let sunHeight = 600;

function setup() {
    pageWidth = $("#canvas-container").width() - 10; // Get width *after* DOM is ready
    pageHeight = $("#canvas-container").height() - 50; // Get height *after* DOM is ready
    
    canvas = createCanvas(pageWidth, pageHeight);
    canvas.elt.id = 'p5-canvas';
    canvas.parent('canvas-container');
    noStroke();
}

function draw() {
    background(redVal, greenVal, 0);

    // Sun
    fill(255, 135, 5, 60);
    circle(300, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(300, sunHeight, 140);

    // Mountains (more mountains, at the bottom)
    const mountainBase = pageHeight; // Base of the mountains (bottom of canvas)

    // Mountain Range 1 (left side)
    fill(110, 50, 18);
    triangle(0, mountainBase, pageWidth * 0.25, mountainBase - 150, pageWidth * 0.5, mountainBase); // Adjusted x positions
    fill(110, 95, 20);
    triangle(0, mountainBase, pageWidth * 0.25, mountainBase - 150, pageWidth * 0.125, mountainBase); // Adjusted x positions

    // Mountain Range 2 (center)
    fill(150, 75, 0);
    triangle(pageWidth * 0.25, mountainBase, pageWidth * 0.5, mountainBase - 200, pageWidth * 0.75, mountainBase); // Adjusted x positions
    fill(100, 50, 12);
    triangle(pageWidth * 0.25, mountainBase, pageWidth * 0.5, mountainBase - 200, pageWidth * 0.375, mountainBase); // Adjusted x positions

    // Mountain Range 3 (right side)
    fill(150, 100, 0);
    triangle(pageWidth * 0.5, mountainBase, pageWidth * 0.75, mountainBase - 175, pageWidth, mountainBase); // Adjusted x positions
    fill(120, 80, 50);
    triangle(pageWidth * 0.5, mountainBase, pageWidth * 0.75, mountainBase - 175, pageWidth * 0.875, mountainBase); // Adjusted x positions


    // Sunrise Animation
    if (sunHeight > 130) {
        sunHeight -= 2;
        if (sunHeight < 480) {
            redVal += 2;
            greenVal += 1;
        }
    }
}
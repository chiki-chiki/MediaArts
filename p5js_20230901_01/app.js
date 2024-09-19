let d; // 直径を表す

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  colorMode(HSB,width,100,100);
}

function draw() {
  fill(mouseX,100,100);
  circle(width / 2, height / 2, 1000);
}
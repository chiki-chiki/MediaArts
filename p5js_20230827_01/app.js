function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    // strokeWeight(10);
    // stroke(100);
    // //nostroke();
    // fill(100);  
    // //circle(width / 2, height / 2, 50);
  }
function draw(){
  //clear()
  strokeWeight(random(1,5));
  stroke(random(180, 255));
  circle(width/2,height/2,random(500));
  
}

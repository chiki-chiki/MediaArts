var gif_loadImg, gif_createImg,happysong,bg;

function preload() {
  gif_createImg = createImg("4OUbQn-unscreen.gif");
  happysong=loadSound("happyhappyhappy.mp3");
  
}

function setup() {
  createCanvas(500, 700);
  background(255);
}

function draw() {
  // loads only first frame
  //image(gif_loadImg, 50, 50);
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  if(happysong.isPlaying()){
    y=mouseY-320;
    
  }
  else{
    y=50;
  }
  
    gif_createImg.position(100, y);
  
  let speed = map(mouseY,height,0.1, 0, 2);
    speed = constrain(speed, 0.05, 2);
    let norrange=0.2;
    if(speed<1+norrange&&speed>1-norrange){
      speed=1.0;
    }
    happysong.rate(speed);
  
}

function mousePressed(){
  if(happysong.isPlaying()){
    happysong.stop();
  }
  else{
    happysong.loop();
  }
}
let ax=100;
let ay=100;
let bx=100;
let by=300;
let cx=300;
let cy=100;

let dx=0;
let dy=0;
let t=0;
let i=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  colorMode(HSB,width,100,100);
}

function draw() {
  clear()
  fill(mouseX,100,100);
  circle(ax, ay, 10);
  circle(bx, by, 10);
  circle(cx, cy, 10);

  fill(0,100,100);

  t+=0.1;
  if(t>=1){
    i+=1;
    if(i>2){
      i=0;
    }
    t=0;
  }

  if(i==0){
    dx=lerp(ax,bx,t);
    dy=lerp(ay,by,t);
  }
  else if(i==1){
    dx=lerp(bx,cx,t);
    dy=lerp(by,cy,t);
  }
  else if(i==2){
    dx=lerp(cx,ax,t);
    dy=lerp(cy,ay,t);
  }


  
  circle(dx,dy,20);
}
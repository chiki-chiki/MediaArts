let nicomoji;

function preload(){
  nicomoji=loadFont('assets/nicomoji-plus_v2.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  colorMode(HSB,width,100,100);
}

function draw() {
  clear()
  background("#F5F191")
  stroke("#8A702C");
  strokeWeight(25);
  fill("#ADBA14");


  //キウイ断面
  circle(windowWidth/2,windowHeight/2,300);
  noStroke();
  fill("#F5F3DC");
  circle(windowWidth/2,windowHeight/2,100);
  
  //キウイの種
  let d=70;
  let numOfCircles=8;
  fill("#505050");
  for(let i=0;i<numOfCircles;i++){
    let angle=TWO_PI/numOfCircles*i;
    let x=cos(angle)*d;
    let y=sin(angle)*d;
    circle(windowWidth/2+x,windowHeight/2+y,10*2);
  }

  textSize(32);
  textAlign(CENTER,CENTER);
  fill("#D84013");
  textFont(nicomoji);
  text("キウイの日",windowWidth/2,windowHeight/2+200);



  //キウイ上
  fill("#8A702C");
  stroke("#8A702C");
  strokeWeight(25);
  let posX=windowWidth/2;
  if(mouseX>windowWidth/2){
    posX=mouseX;
  }
  circle(posX,windowHeight/2,300)
  
}
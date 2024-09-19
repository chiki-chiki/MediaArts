let maxNum=50;//処理回数指定
let strokeWeightMin=30;//線幅min
let strokeWeightMax=80;//線幅Max
let r = 300;//円の直径

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
  noFill();
  rectMode(CENTER);  // 四角形の描画モードを中心基準に設定
}

let num=0;

function draw() {
  //background(220);  // 背景をリセット（オプション）

  if(num<maxNum){

  translate(width/2, height/2); // キャンバスの中央に原点を移動
  rotate(PI / random(1, 8)); // 0からPI/8までのランダムな回転

  //fill(random(100, 240));
  stroke(random(100, 240));
  strokeWeight(random(strokeWeightMin,strokeWeightMax))

  let theta = TWO_PI * random(); // 0から2π（360度）のランダムな角度

  let x = r * cos(theta);
  let y = r * sin(theta);


  let z = random(50, 100);

  rect(x, y, z, z);  // 中央にランダムなサイズの四角形を描画
  num+=1;
  }
}


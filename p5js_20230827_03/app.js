let d; // 直径を表す

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  d = 0; // 直径の初期化
}

function draw() {
  d++; // 例として、直径に1という固定の数を加え続ける

  clear();
  circle(width / 2, height / 2, d);
}
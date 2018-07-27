let pos = 0;
let fendaWidth = 8;
let word = "HELP";
let fontSize = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  textSize(400);
  textAlign(CENTER, CENTER);
  while(textWidth(word) > windowWidth) {
    fontSize -= 2;
    textSize(fontSize);
  }
}

function draw() {
  pos = (pos + 10) % width;
  background(0);
  fill(255);
  text(word, width / 2, height / 2);
  fill(0);
  rect(0, 0, pos, height);
  rect(pos+fendaWidth, 0, width-pos, height);
}

function windowResized() {
  setup();
}

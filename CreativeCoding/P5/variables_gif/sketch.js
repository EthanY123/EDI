let gif;

function preload (){
  gif = loadImage ('assets/backgroundimage.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(132, 23,213);
  strokeWeight(0);

  var num = 15;
  var sideLen = windowWidth/num;

  translate (-150,  -150)

  for (var y = 0; y < 2 * windowWidth; y = y + sideLen) {
    for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
      image(gif, x, y, windowWidth/num);
    }
  }
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight)

}

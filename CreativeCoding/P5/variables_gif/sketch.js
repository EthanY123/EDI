let gif;

function preload (){
  gif = loadImage ('assets/backgroundimage.png')
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  fill(132, 23,213);
  strokeWeight(0);

  var num = 15;
  var sideLen = 300;

  for (var y = 0; y < windowWidth; y = y + sideLen) {
    for (var x = 0; x < windowWidth; x = x + sideLen) {
      image(gif, x, y, windowWidth/num);
    }
  }
}

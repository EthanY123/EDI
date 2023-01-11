let gif;

function preload (){
  gif = loadImage ('assets/backgroundimage.png')
}

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  fill(132, 23,213);
  strokeWeight(1);

  var num = 15;
  var sideLen = windowWidth / num; 

  for (var y = 0; y < windowWidth; y = y + sideLen) {
    for (var x = 0; x < windowWidth; x = x + sideLen) {
      image(gif, x, y, windowWidth/num);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  fill(230,80,80);
  strokeWeight(1);

  var num = 15;
  var sideLen = windowWidth / num; 

  for (var y = 0; y < windowWidth; y = y + sideLen) {
    for (var x = 0; x < windowWidth; x = x + sideLen) {
      quad(x, y,
          x + sideLen, y,
          x + sideLen, y + sideLen,
          x, y + sideLen);
    }
  }
}

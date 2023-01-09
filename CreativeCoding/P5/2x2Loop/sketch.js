function setup() {
  createCanvas(720,720);
}

function draw() {
  fill(230,80,80);
  strokeWeight(8);
  translate(60,60);

  for (var y = 0; y < 600; y = y + 300) {
  for (var x = 0; x < 600; x = x + 300) {
      quad(x, y,
          x + 300, y,
          x + 300, y + 300,
          x, y + 300);
    }
  }
}

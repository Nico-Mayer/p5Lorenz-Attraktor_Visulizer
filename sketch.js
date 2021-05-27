let x = 0.01;
let y = 0;
let z = 0;

const sigma = 10;
const b = 28;
const c = 8.0 / 3.0;
const width = 2550;
const height = 1300;

let lastPoint;
let points = [];

function setup() {
  createCanvas(width, height, WEBGL);
  colorMode(HSB);
  lastPoint = createVector(0, 0, 0);
}

function draw() {
  background(10);
  orbitControl();
  let dt = 0.01;
  let dx = sigma * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  translate(0, 0, -80);
  points.push(createVector(x, y, z));
  scale(10);

  //drawLine(x, y, z, lastPoint.x, lastPoint.y, lastPoint.z);

  var len = points.length;
  var i = 0;
  let hue = 0;
  beginShape();
  noFill();
  strokeWeight(4);
  while (i < len) {
    hue = hue + 0.1;
    stroke(hue, 255, 255);
    vertex(points[i].x, points[i].y, points[i].z);
    if (hue > 255) {
      hue = 0;
    }
    i++;
  }
  endShape();

  //lastPoint = createVector(x, y, z);
}

function drawLine(x, y, z) {
  beginShape();
  strokeWeight(4);
  vertex(x, y, z);
  endShape();
}

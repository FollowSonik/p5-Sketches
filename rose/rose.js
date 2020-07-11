let d = 8
let n = 5
let sliderD
let sliderN

function setup() {
  createCanvas(925, 920)
  sliderD = createSlider(1, 10, 5)
  sliderN = createSlider(1, 10, 5)
}

function draw() {
  d = sliderD.value()
  n = sliderN.value()
  let k = n / d
  background(51)
  translate(width / 2, height / 2)

  beginShape()
  stroke(255)
  noFill()
  strokeWeight(1)
  for (let a = 0; a < TWO_PI * d; a += 0.001) {
    const r = 200 * cos(k * a)
    const x = r * cos(a)
    const y = r * sin(a)
    point(x, y)
    vertex(x, y)
  }
  endShape(CLOSE)
}
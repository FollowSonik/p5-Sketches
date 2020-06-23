let time = 0
const wave = []
const test = ''

let slider

function setup() {
  createCanvas(1000, 800)
  slider = createSlider(1, 1000, 1)
}

function draw() {
  background(0)
  translate(255, 400)

  let x = 0
  let y = 0

  for (let i = 0; i < slider.value(); i++) {
    const prevx = x
    const prevy = y
    const n = i * 2 + 1
    const radius = 200 * (4 / (n * PI))
    x += radius * cos(n * time)
    y += radius * sin(n * time)

    stroke(255, 55)
    noFill()
    ellipse(prevx, prevy, radius * 2)

    fill(225)
    stroke(225)
    line(prevx, prevy, x, y)
    ellipse(x, y, 8)
  }

  wave.unshift(y)
  translate(200, 0)
  line(x - 200, y, 0, wave[0])

  beginShape()
  noFill()
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i])
  }
  endShape()

  time -= 0.01

  if (wave.length > 500) {
    wave.pop()
  }
}
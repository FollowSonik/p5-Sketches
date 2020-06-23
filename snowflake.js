const symmetry = 6
const angle = 360 / symmetry
let slider
let xoff = 0

function setup() {
  createCanvas(1024, 1024)
  angleMode(DEGREES)
  background(111)
  const saveButton = createButton('save')
  saveButton.mousePressed(saveSnowFlake)
  const clearButton = createButton('clear')
  clearButton.mousePressed(clearCanvas)
  slider = createSlider(1, 32, 4, 0.1)
  // colorMode(HSB, 255, 255, 255)
}

function saveSnowFlake() {
  save('snowflake.png')
}

function clearCanvas() {
  background(0)
}

function draw() {
  translate(width / 2, height / 2)
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    const mx = mouseX - width / 2
    const my = mouseY - height / 2
    const pmx = pmouseX - width / 2
    const pmy = pmouseY - height / 2

    if (mouseIsPressed) {
      let hu = map(sin(xoff), -1, 1, 0, 225)
      xoff += 1
      stroke(hu, 100)
      for (let i = 0; i < symmetry; i++) {
        rotate(angle)
        // const d = dist(mouseX, mouseY, pmouseX, pmouseY)
        // const sw = map(d, 0, 16, 16, 2)
        const sw = slider.value()
        strokeWeight(sw)
        line(mx, my, pmx, pmy)
        push()
        scale(-1, 1)
        line(mx, my, pmx, pmy)
        pop()
      }
    }
  }
}
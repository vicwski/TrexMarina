var box1, box2

function setup() {
  createCanvas(400, 400)

  box1 = new Box(100, 200, 30, 30, 2)
  box2 = new Box(150, 250, 30, 30, 3)
}

function draw() {
  background(220)

  box1.display()
  box2.display()

  box1.xSpeed()
  box2.xSpeed()
}

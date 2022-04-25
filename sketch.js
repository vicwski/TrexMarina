var trex, trex_running, trex_collided
var ground, invisibleGround, groundImage
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6
var cloudImg

function preload() {
  trex_running = loadAnimation(
    'sprites/trex1.png',
    'sprites/trex2.png',
    'sprites/trex3.png'
  )
  trex_collided = loadImage('sprites/trex_collided.png')

  groundImage = loadImage('sprites/ground2.png')

  cloudImg = loadImage('sprites/cloud.png')

  obstacle1 = loadImage('sprites/obstacle1.png')
  obstacle2 = loadImage('sprites/obstacle2.png')
  obstacle3 = loadImage('sprites/obstacle3.png')
  obstacle4 = loadImage('sprites/obstacle4.png')
  obstacle5 = loadImage('sprites/obstacle5.png')
  obstacle6 = loadImage('sprites/obstacle6.png')
}

function setup() {
  createCanvas(600, 200)

  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50)
  trex.addAnimation('running', trex_running)
  trex.scale = 0.5

  //crie sprite ground (solo)
  ground = createSprite(200, 180, 400, 20)
  ground.addImage('ground', groundImage)
  ground.x = ground.width / 2
  ground.velocityX = -4

  //crie um solo invisível
  invisibleGround = createSprite(200, 190, 400, 10)
  invisibleGround.visible = false
}

function draw() {
  //definir cor do plano de fundo
  background(120)

  // pulando o trex ao pressionar a tecla de espaço
  if (keyDown('space') && trex.y >= 100) {
    trex.velocityY = -10
  }

  gravity()

  if (ground.x < 0) {
    ground.x = ground.width / 2
  }

  //impedir que o trex caia
  trex.collide(invisibleGround)

  //chamar função de criar as nuvens
  criarNuvens()

  //chamar função de criar os obstaculos
  criarObstacles()

  drawSprites()
}

function gravity() {
  trex.velocityY = trex.velocityY + 0.8
}

function criarNuvens() {
  //frameCount para "atrasar" a criação das sprites de nuvens
  // % (módulo) = resto de uma divisão
  if (frameCount % 60 === 0) {
    var cloud = createSprite(610, 40, 40, 10)
    cloud.addImage(cloudImg)
    cloud.scale = 0.8
    //round: arredonda para o número mais próximo
    //random: número aleatório
    cloud.y = Math.round(random(10, 100))
    cloud.velocityX = -2

    //tempo de vida
    cloud.lifetime = 325

    //profundidade
    cloud.depth = trex.depth
    trex.depth += 1
  }
}

function criarObstacles() {
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(610, 160, 10, 60)
    obstacle.scale = 0.8
    obstacle.velocityX = -4

    var rand = Math.round(random(1, 6))
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1)
        break
      case 2:
        obstacle.addImage(obstacle2)
        break
      case 3:
        obstacle.addImage(obstacle3)
        break
      case 4:
        obstacle.addImage(obstacle4)
        break
      case 5:
        obstacle.addImage(obstacle5)
        break
      case 6:
        obstacle.addImage(obstacle6)
        break
      default:
        break
    }

    //tempo de vida
    obstacle.lifetime = 325
  }
}

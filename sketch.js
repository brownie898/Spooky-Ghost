var ghost,door,greenBlob,climber
var ghostJumping,ghostStanding,doorImage,climberImage
var tower, towerImage
var invisbleBlock
var doorGroup
var climberGroup
var invisibleBlockGroup
var gameState = "play"
var spooky
function preload(){
  towerImage = loadImage("tower.png")
  ghostStanding = loadImage("ghost-standing.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  spooky = loadSound("spooky.wav")
}
function setup(){
  createCanvas(600,600)
  spooky.loop()
  tower = createSprite(300,300)
  tower.addImage("yeet",towerImage)
  tower.velocityY = 2
  ghost = createSprite(200,200,50,50)
  ghost.addImage("something",ghostStanding)
  ghost.scale = 0.3
  doorGroup = new Group()
  climberGroup = new Group()
  invisibleBlockGroup = new Group()
  
}
function draw(){
  background("purple")
  if(gameState === "play"){
    
  
  if(tower.y > 400){
    tower.y = 300
  }
  if(keyDown("left")){
    ghost.x = ghost.x-3
  }
  if(keyDown("right")){
    ghost.x = ghost.x+3
  }
  if(keyDown("space")){
    ghost.velocityY = -2
  }
  ghost.velocityY = ghost.velocityY+0.8
  spawnDoors()
  
  if(ghost.isTouching(climberGroup)){
    ghost.velocityY = 0 
  }
  
  if(ghost.isTouching(invisibleBlockGroup)||ghost.y > 600){
    ghost.destroy()
    gameState = "end"
  }
  
  drawSprites()}
  if(gameState === "end"){
    strokeWeight(4)
    stroke("red")
    fill("black")
    textSize(30)
    text("Game Over",200,200)
  }
}
function spawnDoors(){
  if(frameCount % 240 === 0){
    door = createSprite(200,-50)
    door.addImage(doorImage)
    door.velocityY = 2
    ghost.depth = door.depth+1
    door.lifetime = 300
    door.x = Math.round(random(100,500))
    doorGroup.add(door)
    climber = createSprite(door.x,10)
    climber.addImage(climberImage)
    climber.velocityY = 2
    climber.lifetime = 300
    climberGroup.add(climber)
    invisibleBlock = createSprite(climber.x,15,climber.width,2)
    invisibleBlock.velocityY = 2
    invisibleBlock.debug = true
    invisibleBlock.lifetime = 300
    invisibleBlockGroup.add(invisibleBlock)
  }    
}

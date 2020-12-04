function preload() {
  backgroundImg = loadImage("Images.sprites/mushroomkingdom.png");
  MarioImg = loadAnimation("Images.sprites/mario.png")
}

function setup() {
  createCanvas(2000, 700);
  Background = createSprite(1000, 350, 2000, 700);
  Background.addImage(backgroundImg);
  Background.scale = 0.5;
  Mario = createSprite(200, 500);
  Mario.addAnimation("mario", MarioImg);
  Mario.scale = 0.25;
}

function draw() {
  background(0);  
  drawSprites();
}
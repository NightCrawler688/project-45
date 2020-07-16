var player;
var playerImg,rockImg,backgroundImg,enemyImg,bulletImg;
var gameState = 0;
var game;
var obstacles;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8;
function preload() {
  playerImg = loadImage("player.png");
  rockImg = loadImage("rocks.png");
  backgroundImg = loadImage("background.png");
  enemyImg = loadImage("enemy.png");
 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player();
  game = new Game();
  obstacles = new Obstacles();
  enemy1 = new Enemy(458,281,20,50);
  enemy2 = new Enemy(414,502,30,40);
  enemy3 = new Enemy(184,377,20,60);

}
function draw() {
  background(122,122,88);  
  image(backgroundImg,0,0,width,height);
  edges = createEdgeSprites();
  fill("white");
  text("x:" + mouseX + ",y:"+mouseY,mouseX,mouseY);
  drawSprites();
  if(gameState === 0) {
    game.start();
  }
  if(gameState === 1) {
    game.play();
  }
  if(gameState === 2) {
    game.end();
  }

}
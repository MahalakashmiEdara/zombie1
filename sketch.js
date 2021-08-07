var canvas;
var towerImage,doorImage;
var zombie,zombieImage;
var player,shooterImg;
var gameState="play";
var ball,ballImage;
var score=0;


function preload(){
    shooterImg1 = loadImage("shooter_1.png");
    shooterImg2=loadImage("shooter_2.png")
    shooterImg3=loadImage("shooter_3.png");
    towerImg = loadImage("Tower.png");
    zombieImage = loadImage("Zombie.png");
    ballImage=loadImage("Ball.png"); 
}
    function setup(){

  createCanvas(600,600);


       
    tower = createSprite(300,300)
    tower.addImage(towerImg)
    tower.scale = 1.1
    tower.velocityY=1

    player = createSprite(100,200,50,50)
    player.addImage("stand",shooterImg1);
    player.addImage("ready",shooterImg2);
    player.addImage("shoot",shooterImg3);
    player.scale = 0.3

    ball=createSprite(player.x,player.y);
    ball.addImage(ballImage);
    ball.scale=0.005;
    
    edges=createEdgeSprites();
    zombieGroup=new Group();
}

function draw() {
    
    

                        
  background(0) ; 


  if(gameState==="play"){
  if(tower.y>400){
      tower.y=300;
  }
  if(keyDown("left")){
      player.x-=2;
  }
  if(keyDown("right")){
      player.x+=2;
  }
  if(keyWentDown("s")){
      player.changeImage("shoot",shooterImg3);
      ball.velocityX=4;
  }
  if(keyWentUp("s")){
    player.changeImage("stand",shooterImg1);
}
if(keyDown("space")){
    player.velocityY=-3;
}
player.velocityY=player.velocityY+0.5;

 
if(frameCount % 250 === 0){
    zombie=createSprite(250,250);
    zombie.x=Math.round(random(180,550));
 
    zombie.addImage(zombieImage);
    zombie.scale=0.1;
    zombie.velocityY=1;
    zombieGroup.add(zombie);
    
}

if (ball.isTouching(edges[1])) {
    if(ball.x > 600) {
     
      
     }
    
   }

if(ball.isTouching(zombieGroup)){
    score=score+2; 
    zombie.remove();
}
if(player.isTouching(zombieGroup) || player.y>600){
    gameState="end";
}

drawSprites();
textSize(25);
fill("red");
text("Score : "+score,500,50 );
}

if(gameState==="end"){
    fill("red");
    textSize(30);
    text("Game Over",250,250);
}



}

var bullet
var wall,thickness
var speed,weight

function setup() {
  createCanvas(400,1600);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  car=createSprite(50,200,50,50);
  wall=createSprite(200,200,thickness,height/2);
  
}

function draw() {
  background(255,255,255);
  bullet.velocityX=speed 
  wall.shapeColor =color(80,80,80) 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) 
  
   
   
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();}
  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
  }
 
var wall, thicckness;
var bullet, speed, weight;

function setup() {
  createCanvas(400,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,20, 5);
 
  bullet.velocityX= speed;

  wall = createSprite (300, 200, thickness, height/2);
 
}

function draw() {
  background(0);

 if (wall.x-bullet.x < (bullet.width+wall.width)/2){
   bullet.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if (deformation>180);
 }
 {
   bullet.shapeColor=color(255,0,0,)
 }
 if (deformation>180 && deformation>100)
{
  bullet.shapeColor=color(230,230,0)
}
if (deformation<100)
{
  bullet.shapeColor=color(0,225,0)
}
 drawSprites();
}
function hasCollided (bullet, wall){
 bulletRightEdge = bullrt.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdgde >= wallLeftEdge)
{
  return true
}  
  return false

  if (hasCollided(bullet, wall)){
   bullet.velocityX = 0
   var damage = 0.5 *weight * speed* speed/(thickness * thickness * thickness);
  }
  if (damage>10){
   wall.shapeColor = color(255,0,0)
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0)
  }
}



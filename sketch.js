var bulet,wall
var speed,weight,thickness
var collideConfirm;

function setup() {
  createCanvas(1600,400);
   speed = random(223,321);
  weight = random(30,52) ;
  thickness = random(22,83);
  bullet = createSprite(70, 200, 70, 20);
  
  wall = createSprite(1200,200,thickness,height/2);


}

function draw() {
  background(80,80,80);  
  bullet.velocityX = speed;
wall.shapeColor = "white";
  bullet.shapeColor = "white";

//console.log(speed,weight,thickness);
  collide(bullet,wall);
  drawSprites();
}

function collide(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2
      && object2.x - object1.x <= object2.width/2 + object1.width/2){
          object1.velocityX = 0;

collideConfirm = 1;
      }
if(collideConfirm == 1){
  var damage = 0.5*weight*speed*speed/ (thickness*thickness*thickness);

  if(damage<10 ){
    wall.shapeColor = "green";
  }

         if(damage>10){
    wall.shapeColor = "red";
  }
}
  }
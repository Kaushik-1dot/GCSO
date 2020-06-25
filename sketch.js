
var car,wall;
var speed,weight;

function setup(){
createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(50,200,50,50);
car .velocityX = speed;

wall = createSprite(1500,200,60,height/2);
wall.ShapeColor = (80,80,80);



}

function draw(){

if(car.x-wall.x<fixedrect.width/2+movingrect.width/2 && 
   fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
      
    movingrect.velocityX = movingrect.velocityX*(-1);
    fixedrect.velocityX = fixedrect.velocityX*(-1);
      
}
      

      
if(car.x-wall.x<(car.width+wall.width)/2&&
wall.x-car.x<(wall.width+car.width)/2
)
{
var deformation  = 0.5*weight*speed*speed/22509;

if(deformation>180){
car.ShapeColor = (255,0,0);
}

if(deformation<180 && deformation>100{
car.ShapeColor = (230,230,0);
}

if(deformation>100){
car.ShapeColor = (0,255,0);
}

}

drawSprites();

}



var fixedrect,movingrect
var obj1,obj2
function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
movingrect=createSprite(300,200,50,50);
movingrect.shapeColor="green";
obj1=createSprite(202,40,50,50);
obj1.shapeColor="blue";
obj1.velocityX=2;
obj1.velocityY=2;
obj2=createSprite(350,100,50,50);
obj2.shapeColor="blue";
obj2.velocityX=-2;
obj2.velocityY=-2;
}


function draw() {
  background(255,255,255);  

  movingrect.x=mouseX;
  movingrect.y=mouseY;
if (isTouching(obj1,obj2))
{
obj1.shapeColor="yellow";
obj2.shapeColor="yellow";
}
else{obj1.shapeColor="blue";
obj2.shapeColor="blue";}
bounceOff(obj1,obj2);
  drawSprites();
}













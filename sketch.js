var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  gameObject1 = createSprite(800, 400,100,50);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(800, 400,60,100);
  gameObject2.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
//movingRect.x=mouseX;
//movingRect.y=mouseY;
gameObject1.x=mouseX;
gameObject1.y=mouseY;
 /* if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }*/
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  if(isTouching(gameObject1,gameObject2)){
    gameObject2.shapeColor="pink";
    gameObject1.shapeColor="pink";
  }
  else{
    gameObject1.shapeColor="blue";
    gameObject2.shapeColor="blue";
  }
  drawSprites();
}
function isTouching(object1,object2){
   if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
     return true;
  }
else{
return false;
}
}
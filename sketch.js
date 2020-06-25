var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(100,200,60,30);
movingRect=createSprite(300,200,60,30);
fixedRect.debug=true;
movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
   &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
   &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
   &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";  
  }
  else{
    fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";
  }
  
  drawSprites();
}
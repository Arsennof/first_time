var sprite
function setup() {
  createCanvas(600,600);

 sprite = createSprite (300,300, 50,50)
sprite.shapeColor = "red"

}
function draw() 
{
  background(30);




  if (keyDown("right")){
sprite.x=sprite.x+10
}
if (keyDown("left")){
sprite.x=sprite.x-10
}
if (keyDown("up")){
sprite.y=sprite.y-10
}
if (keyDown("down")){
  sprite.y=sprite.y+10
  }

  drawSprites ()
}






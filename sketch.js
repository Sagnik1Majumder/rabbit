var garden,rabbit;
var gardenImg,rabbitImg;
var line,lin
var apple,leaf,redLeaf2,orangeLeaf3
var rand


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple2=loadImage("apple.png")
  redLeaf=loadImage("redImage.png")
  leaf1=loadImage("leaf.png")
  orangeLeaf=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(1300,900);
  

garden=createSprite(650,300);
garden.addImage(gardenImg);
garden.scale=1.5

// lin=createSprite(1225,320,400,650)
// line=createSprite(85,320,400,650)

rabbit = createSprite(650,450,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  // rabbit.collide(line)
  // rabbit.collide(lin)
  drawSprites();
  var rand=Math.round(random(1,3))
  if(frameCount% 80==0){
    if (rand == 1) {
      createApples();
    } else if (rand == 2) {
      createLeaf();
    } else  {
      createLeaf2();
    } 
     
    }
  }
function createApples(){
  
  apple=createSprite(random(350,950),10,100,100)
  apple.addImage(apple2)
  apple.scale=0.1
  apple.velocityY=4
}
function createLeaf(){
  
  leaf=createSprite(random(350,950),10,100,100)
  leaf.addImage(leaf1)
  leaf.scale=0.1
  leaf.velocityY=4
}
function createLeaf2(){
  
  redLeaf2=createSprite(random(350,950),10,100,100)
  redLeaf2.addImage(redLeaf)
  redLeaf2.scale=0.1
  redLeaf2.velocityY=4
}
function createLeaf3(){
  
  orangeLeaf3=createSprite(random(350,950),10,100,100)
  orangeLeaf3.addImage(orangeLeaf)
  orangeLeaf3.scale=0.1
  orangeLeaf3.velocityY=4
}




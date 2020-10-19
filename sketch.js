

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;
var dustbin;
var song;
function preload()
{
dustbin1=loadImage("dustbingreen.png");	

}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin=createSprite(1080,499,200,100);
dustbin.addImage(dustbin1);
dustbin.scale=0.67

line=createSprite(1100,600,140,20);
line.visible=false;

	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1160,510,20,200);
dustbin1.visible=false;
	dustbin2=new Dustbin(1000,510,20,200);
	
	dustbin3=new Dustbin(1100,600,140,20);
	
	dustbin4=new Dustbin(1240,300,20,1020);

	dustbin5=new Dustbin(625,10,1800,20);

	dustbin6=new Dustbin(10,300,20,1800);

	//Create a Ground
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  isTouching(line,paperObject);



  
  paperObject.display();
  groundObject.display();
  


  dustbin4.display();
  dustbin5.display();
  
  dustbin6.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:125,y:-165});

  
	}
}

function isTouching(line,paper){
    if (line.x-paper.x < line.width/2+paper.width/2&&line.x-paper.x < line.width/2+paper.width/2&&paper.y-line.y < line.width/2+paper.width/2&&line.y-paper.y < line.width/2+paper.width/2){
sound.play();
    }
}


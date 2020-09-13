var side1,side2,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	side1=createSprite(450,600,20,100);
	side1.shapeColor="white";
	 
	//paper=createSprite(50,650);
    

	side2=createSprite(650,600,20,100);
	side2.shapeColor="white";



	bottom=createSprite(550,650,200,20)
	bottom.shapeColor="white";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paper=new 	Paper(100,350,10);
	 ground1=new Ground(400,670,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 ground1.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-15})
	}
}


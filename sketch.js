var ground;
var box1, box2, box3


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1200,50);
	box1 = new Box(800,600,20,100);
	box2 = new Box(1100,600,20,100);
	box3 = new Box(950,620,300,20);
	paper = new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 85, y: -85});
	}	  
}




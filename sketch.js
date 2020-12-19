
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob,engine;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

  bob1=new Bob(200,600,100,100);
  bob2=new Bob(300,600,100,100);
  bob3=new Bob(400,600,100,100);
  bob4=new Bob(500,600,100,100);
  bob5=new Bob(600,600,100,100);
  roof=new Roof(400,100,550,80);
  rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}




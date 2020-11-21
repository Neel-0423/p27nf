
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,50,50);
	bob2 = new Bob(350,500,50,50);
	bob3 = new Bob(300,500,50,50);
	bob4 = new Bob(450,500,50,50);
	bob5 = new Bob(500,500,50,50);
	roof = new Roof(400,250,width,10);
	chain1 = new Chain(bob1.body,roof.body,-bob1.width*2,0);
	chain2 = new Chain(bob2.body,roof.body,-bob2.width*2,0);
	chain3 = new Chain(bob3.body,roof.body,-bob3.width*2,0);
	chain4 = new Chain(bob4.body,roof.body,-bob4.width*2,0);
	chain5 = new Chain(bob5.body,roof.body,-bob5.width*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
  drawSprites();
}




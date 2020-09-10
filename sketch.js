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

	//Create the Bodies Here.

	ground = new Ground(400,200,500,50)
	


	bobObject1 = new Bob(200,600,50);
	bobObject2 = new Bob(300,600,50);
	bobObject3 = new Bob(400,600,50);
	bobObject4 = new Bob(500,600,50);
	bobObject5 = new Bob(600,600,50);

	rope1 = new Chain(bobObject1.body,ground.body,-200,0);
	rope2 = new Chain(bobObject2.body,ground.body,-100,0);
	rope3 = new Chain(bobObject3.body,ground.body,0,0);
	rope4 = new Chain(bobObject4.body,ground.body,100,0);
	rope5 = new Chain(bobObject5.body,ground.body,200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
	}
  }



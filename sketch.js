
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 675, 800, 20);
	paper = new Paper(200, 200, 20);
	dustbin1 = new Dustbin(490, 600, 20, 150);
	dustbin2 = new Dustbin(660, 600, 20, 150);
	dustbin3 = new Dustbin(575, 655, 150, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  drawSprites();
  paper.display();	
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 1.5, y : -4})	
	}
}


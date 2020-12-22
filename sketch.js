
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;

var pendulum1;
var roof;
var rope;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(510,100,300,20);
	
	pendulum1=new Pendulum(510,300,50);
	pendulum2=new Pendulum(460,300,50);
	pendulum3=new Pendulum(560,300,50);
	pendulum4=new Pendulum(410,300,50);
	pendulum5=new Pendulum(610,300,50);

	rope1=new Rope(pendulum1.body,roof.body,0,0);
	rope2=new Rope(pendulum2.body,roof.body,-50,0);
	rope3=new Rope(pendulum3.body,roof.body,50,0);
	rope4=new Rope(pendulum4.body,roof.body,-100,0);
	rope5=new Rope(pendulum5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  stroke("white");
  textSize(20);
  text("Drag the mouse to move the pendulum",100,50)
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum5.body,{x:mouseX,y:mouseY});
	
}





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base1, base2;
var box1;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 350, 1200, 20);

  base1 = new Ground(500, 300, 200, 20);
  base2 = new Ground(900, 175, 270, 20);
  
  //level3-structure1
  box1 = new Box(440, 275, 30, 30);
  box2 = new Box(470, 275, 30, 30);
  box3 = new Box(500, 275, 30, 30);
  box4 = new Box(530, 275, 30, 30);
  box5 = new Box(560, 275, 30, 30);

  //level2-structure1
  box6 = new Box(470, 245, 30, 30);
  box7 = new Box(500, 245, 30, 30);
  box8 = new Box(530, 245, 30, 30);

  //level1-structure1
  box9 = new Box(500, 245, 30, 30);

  //level4-structure2
  box10 = new Box(810, 150, 30, 30);
  box11 = new Box(840, 150, 30, 30);
  box12 = new Box(870, 150, 30, 30);
  box13 = new Box(900, 150, 30, 30);
  box14 = new Box(930, 150, 30, 30);
  box15 = new Box(960, 150, 30, 30);
  box16 = new Box(990, 150, 30, 30);

  //level3-structure2
  box17 = new Box(840, 120, 30, 30);
  box18 = new Box(870, 120, 30, 30);
  box19 = new Box(900, 120, 30, 30);
  box20 = new Box(930, 120, 30, 30);
  box21 = new Box(960, 120, 30, 30);

  //level2-structure2
  box22 = new Box(870, 90, 30, 30);
  box23 = new Box(900, 90, 30, 30);
  box24 = new Box(930, 90, 30, 30);

  //leve1-structure2
  box25 = new Box(900, 60, 30, 30);

  polygon = new Polygon(200, 200, 20);

  slingShot = new Slingshot(polygon.body, {x: 200, y: 200});
}

function draw() {
  background(255); 
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  ground.display();

  base1.display();  
  base2.display();  

  polygon.display();

  slingShot.display();
   
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(polygon.body);
  }
}
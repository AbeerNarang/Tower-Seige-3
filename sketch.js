const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var chain;
var Polygon;
var backgroundImg;
var score = 0;

function preload(){
backgroundImg = loadImage("bg.png");
getTime();
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,350,250, 10);
  box1 = new Box(310,325,30,40); 
  box2 = new Box(340,325,30,40); 
  box3 = new Box(370,325,30,40); 
  box4 = new Box(400,325,30,40); 
  box5 = new Box(430,325,30,40); 
  box6 = new Box(460,325,30,40); 
  box7 = new Box(490,325,30,40);
  box8 = new Box(340,285,30,40); 
  box9 = new Box(370,285,30,40); 
  box10 = new Box(400,285,30,40); 
  box11 = new Box(430,285,30,40); 
  box12 = new Box(460,285,30,40); 
  box13 = new Box(370,245,30,40); 
  box14 = new Box(400,245,30,40);
  box15 = new Box(430,245,30,40); 
  box16 = new Box(400,205,30,40);
  ground2 = new Ground(800,200,190, 10);
  box17 = new Box2(740,175,30,40); 
  box18 = new Box2(770,175,30,40); 
  box19 = new Box2(800,175,30,40); 
  box20 = new Box2(830,175,30,40); 
  box21 = new Box2(860,175,30,40); 
  box22 = new Box2(770,135,30,40); 
  box23 = new Box2(800,135,30,40);
  box24 = new Box2(830,135,30,40); 
  box25 = new Box2(800,95,30,40);
  Polygon = new poly(100,200,20);
  chain = new SlingShot(Polygon.body,{x:100,y:200})
  Engine.run(engine);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  textSize(30);
    fill("white");
    text("Score:"+score,600,70)
  drawSprites();
  ground.display();
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
  ground2.display();
  chain.display();
  Polygon.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
}

function mouseDragged(){  
 Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
  chain.fly();
}

function keyPressed(){
if(keyCode === 32){
chain.attach(Polygon.body);
}
}





async function getTime(){
  var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var respjson = await resp.json();
  console.log(respjson);
  var datetime = respjson.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour<=18){
  bg = "bg.png"
  }
  else{
  bg = "bg2.jpg"    
  }
  backgroundImg = loadImage(bg);
}
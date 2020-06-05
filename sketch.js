const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world,rainDrop;
var rain1,rain2,rain3,rain4,rain5,rain6,rain7,rain8,rain9,rain10,rain11,rain12,rain13,rain14,rain15;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  rainDrop = new rain(5, 20);
  rain1=new rain(5,20)
  rain2=new rain(5,20)
  rain3=new rain(5,20)
  rain4=new rain(5,20)
  rain5=new rain(5,20)
  rain6=new rain(5,20)
  rain7=new rain(5,20)
  rain8=new rain(5,20)
  rain8=new rain(5,20)
  rain9=new rain(5,20)
  rain10=new rain(5,20)
  rain11=new rain(5,20)
  rain12=new rain(5,20)
  rain13=new rain(5,20)
  rain14=new rain(5,20)
  rain15=new rain(5,20)
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
  rainDrop.display();
  rain1.display();
  rain2.display();
  rain3.display();
  rain4.display();
  rain5.display();
  rain6.display();
  rain7.display();
  rain8.display();
  rain9.display();
  rain10.display();
  rain11.display();
  rain12.display();
  rain13.display();
  rain14.display();
  rain15.display();
 
  //drawSprites();
}
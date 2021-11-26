const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground,ground2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(200,390,400,20);
    ground2 = new Ground(320,140,80,20);
    
    box1 = new Box(200,300,50,50);
    box2 = new Box(120,100,20,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
}
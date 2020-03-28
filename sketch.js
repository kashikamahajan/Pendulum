const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,bob,fixed;


function setup()
{
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

var options_ground=
{
    isStatic:true
}
var options_fixed = {
    isStatic:true
    
}

var options_bob = {

    restitution : 1.0,
    density : 1.0
  
  }

  
  
ground=Bodies.rectangle(200,330,400,20,options_ground);
bob=Bodies.circle(200,200,20,options_bob);
fixed=Bodies.rectangle(200,100,200,20,options_fixed);
World.add(world,ground);
World.add(world,bob);
World.add(world,fixed);

var options = {
    bodyA : bob,
    bodyB : fixed,
    stiffness: 0.004,
    length : 100
  }
  var thread = Constraint.create(options);
  World.add(world,thread);
  

}

function draw()
{
   background("black");
    Engine.update(engine);
    rectMode(CENTER);
rect(fixed.position.x,fixed.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("ED225C");
ellipseMode(RADIUS);
ellipse(bob.position.x,bob.position.y,40);

strokeWeight(8);
stroke("white");
line(bob.position.x,bob.position.y,fixed.position.x,fixed.position.y)




if(keyCode===32){
bob.position.y = mouseY;
bob.position.x = mouseX;
}

else if (keyCode === ENTER){
bob.position.x = 200;

}

}


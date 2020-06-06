const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper1 = new Paper(200,320,40);
    
    ground = new Ground(600,380,1200,10)
	
    object1=new object(900,280);

    
    //line1 = new launcher(paper1.body,{x:200,y:100});
    Engine.run(engine);
}

function draw(){
    background(225);
    //Engine.update(engine);
    //drawSprites();
    ground.display();
    object1.display();
    paper1.display();
    
    
    //line1.display();
   //keyPressed();
 
    }
    /*function mouseDragged ()
    {
        Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
    }
    function mouseReleased()
{
    paper1.fly()
}*/
    
function keyPressed(){
    if (keyCode === UP_ARROW) 
    { Matter.Body.applyForce(paper1.body, paper1.body.position,{x:300,y:-300}); 
   } 
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var polygon_img;
var polygon;
var score=0;
function preload()
{
	polygon_img = loadImage("polygon.png");	
}

function setup() {
	createCanvas(1600, 760.4);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = Bodies.circle(200,200,20);
	World.add(world,polygon);

	ground1 = new Ground(800,520,300,10);
	ground2 = new Ground(1400,200,250,10);

	chain = new Chain(this.polygon,{x:200, y:400});

	B1 = new Box(870,500);
	B2 = new Box(835,500);
	B3 = new Box(800,500);
	B4 = new Box(765,500);
	B5 = new Box(730,500);

	
	B6 = new Box(853,465);
	B7 = new Box(818,465);
	B8 = new Box(783,465);
	B9 = new Box(748,465);
	
	
	B10 = new Box(836,428);
	B11 = new Box(801,428);
	B12 = new Box(766,428);

	
	B13 = new Box(783,394);
	B14 = new Box(818,394);

	
	B15 = new Box(802,359);

	//SECOND TOWER

	
	B16 = new Box(1483,178);
	B17 = new Box(1448,178);
	B18 = new Box(1413,178);
	B19 = new Box(1378,178);
	B20 = new Box(1343,178);


	B21 = new Box(1378,143);
	B22 = new Box(1413,143);
	B23 = new Box(1448,143);

	
	B24 = new Box(1413,108);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  textSize(19)
  fill(255)
  text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS.",20,20)
	
  textSize(19);
  fill(255)
  text("PRESS SPACE TO GET ANOTHER TURN.",20,40)

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  drawSprites();

  imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

ground1.display();
ground2.display();

chain.display();

fill("orange");
 B1.display(); 
 B2.display();
 B3.display();
 B4.display();
 B5.display();
 
 fill("lime");
 B6.display(); 
 B7.display();
 B8.display();
 B9.display();

 B10.display(); 
 B11.display();
 B12.display();
 
 fill("red");
 B13.display(); 
 B14.display();

 fill("lightblue");
 B15.display();
 B24.display();

 fill("pink");
 B16.display(); 
 B17.display();
 B18.display();
 B19.display();
 B20.display();

 fill("orange");
 B22.display();
 B21.display();
 B23.display();
;
 
}


function mouseDragged()
{
	Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
	
}


function mouseReleased()
{
    chain.fly();

}


function keyPressed()
	{
	if(keyCode === 32 )
		{
			Matter.Body.setPosition(this.polygon, {x: 200 , y:400});
      chain.attach(this.polygon);
      
    	}
	}




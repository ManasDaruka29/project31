class Box
{
    constructor(x,y,width,height) 
    {
      var options = 
      {
          retitution: 1.0,
          density: 1.0,
          friction: 1.5,
      }
      this.body = Bodies.rectangle(x,y,35,35,options);
      this.width = 35;
      this.height = 35;
      World.add(world, this.body);

      this.visiblity = 255;
    }
    display()
    {
     // console.log(this.body.speed)
      if(this.body.speed< 14)
      {
      var pos =this.body.position;

      rectMode(CENTER);

  

      rect(pos.x, pos.y, this.width, this.height);
      }
      else
      {
        push();
        World.remove(world,this.body);
        pop();

      }
    }
    score(){
      if(this.visiblity<0 && this.visiblity>-105){
        score++;
        B1.score();
	B2.score();
	B3.score();
	B4.score();
	B5.score();

	
	B6.score();
	B7.score();
	B8.score();
	B9.score();
	
	
	B10.score(); 
	B11.score();
	B12.score(); 

	
	B13.score();
	B14.score(); 

	
	B15.score(); 

	//SECOND TOWER

	
	B16.score(); 
	B17.score(); 
	B18.score(); 
	B19.score(); 
	B20.score(); 


	B21.score();
	B22.score(); 
	B23 .score();

	
	B24.score(); 
      }
    }
}
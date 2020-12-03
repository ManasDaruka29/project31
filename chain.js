class Chain
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.pointB =pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body)
    {
        this.chain.bodyA = body;
    }

    fly()
    {
        this.chain.bodyA = null;
    }
  
   display()
   {

    push();
     if(this.chain.bodyA)
     {
        strokeWeight(4);
        stroke("cyan")
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
     pop();
    }
}

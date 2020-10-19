class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.7,
			friction:0.5,
			density:2.0

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.width=width
		this.height=height
		this.body=Bodies.circle(this.x, this.y, 20, options)
		World.add(world, this.body);
        this.image = loadImage("paper.png");
	}
	display()
	{
			
			var paperpos=this.body.position;		

            push()
           
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			image(this.image, 0, 0,70,70);
			//strokeWeight(4);
			fill("blue")
		
			pop()
			
	}

}
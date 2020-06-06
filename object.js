class object {
    constructor(x, y,) {
      var options = {
          'restitution':0,
          isStatic:true,
          'friction': 0.5,
          'density': 1.0
      }
      this.x=x
      this.y=y
      this.leftbody = Bodies.rectangle(this.x, this.y,10,100, options);
      this.rightbody = Bodies.rectangle(this.x+200, this.y,10,100, options);
      this.bottombody= Bodies.rectangle(this.x+100,this.y+50,200,10,options)
      

      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
   
      
      

     this.img=loadImage("dustbingreen.png");

   

    
    
    }
    display(){
      //var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      
      //rotate(angle);
      rectMode(CENTER)
      rect(this.leftbody.position.x, this.leftbody.position.y,10,100);
      rect(this.rightbody.position.x, this.rightbody.position.y,10,100);
      rect(this.bottombody.position.x,this.bottombody.position.y,200,10);
      
      fill(255);
     // translate(this.bottombody.position.x,this.leftbody.position.y);
     // imageMode(CENTER);
     // image(this.img,0, 0,230,110);
      
    
      pop();
    
    }
}


class poly {
    constructor(x, y,radius) {
      var options = {
      isStatic:false,    
      restitution:0,
      friction:1,
      density:1.2
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.body);
    }
    display(){
    fill("yellow");    
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,20,20);
  }
    }
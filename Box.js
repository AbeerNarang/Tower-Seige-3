class Box {
    constructor(x, y, width, height) {
    var options = {
    isStatic:false,    
    restitution:0,
    friction:1,
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    push();
    var angle=this.body.angle;
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.width, this.height);
    pop();
    }
    score(){
        if(this.body.position.y>350 && this.body.position.y<400){
        score++
        }
        
        }
    }; 
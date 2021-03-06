class Paper {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.4, 
          isStatic: false
          
      }
      this.r = r;
      this.body = Bodies.circle(x, y, this.r/2, options);

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("maroon");
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
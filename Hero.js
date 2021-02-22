class Hero {
  constructor(x, y,r) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.x = x;
    this.y = y;
    this.r = r;  
    this.body = Bodies.circle(x, y, r,options);
    this.image = loadImage("images/Superhero-01.png")
    World.add(world, this.body);
  }

  display() {
    
    push();

    imageMode(CENTER);
    image(this.image, 0, 0, 1);
    pop();
  }
}

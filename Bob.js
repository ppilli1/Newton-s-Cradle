class Bob {

    constructor (x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction:2,
            density: 2
        }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
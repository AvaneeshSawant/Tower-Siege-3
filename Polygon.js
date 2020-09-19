class Polygon{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1,
            density: 1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
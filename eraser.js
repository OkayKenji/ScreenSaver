class eraser {
    constructor(x,y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(0.5,0.9))
    }

    display() {    
        stroke(0);
        strokeWeight(4);
        point(this.pos.x,this.pos.y);
    }

    update(bias) {
       

        this.pos.add(this.vel);
        //this.pos.y += this.vel.y;

        if (this.pos.x<0||this.pos.x>width) {
            this.pos = createVector(random(width), random(height));
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(0.5,0.9))
        }
        if (this.pos.y<0||this.pos.y>height) {
            this.pos = createVector(random(width), random(height));
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(0.5,0.9))     
        }
    }
}

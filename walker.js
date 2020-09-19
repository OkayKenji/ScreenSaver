class walker {
    constructor(x,y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(0.5,0.9))
        this.red = random(255);//random(150,255);
        this.gre = random(255);//random(150,200);
        this.blu = random(255);//random(0,150);
        this.black = false; 
        this.thick = 2; 
    }

    display() {    
        stroke(this.red,this.gre,this.blu,255/4);
        strokeWeight(this.thick);
        point(this.pos.x,this.pos.y);
    }

    update(bias) {
        // let r = floor(random(0,4));
        // if (bias!=0) {
        //     if (bias==37) {
        //         while (r==3) {
        //             r= floor(random(0,4));
        //         }
        //     } 
        //     else if (bias==38) {
        //         while (r==1) {
        //             r= floor(random(0,4));
        //         }
        //     }
        //     else if (bias==39) {
        //         while (r==2) {
        //             r= floor(random(0,4));
        //         }
        //     }
        //     else if (bias==40) {
        //         while (r==0) {
        //             r= floor(random(0,4));
        //         }
        //     }

        // }

        // switch (r) { //left
        //     case 0: //up
        //         this.pos.y -= 1;
        //         break;
        //     case 1: //down
        //         this.pos.y += 1;
        //         break;
        //     case 2: //left 
        //         this.pos.x -= 1;
        //         break;
        //     case 3: //right
        //         this.pos.x += 1;
        //         break;

        // }

        this.pos.add(this.vel);
        //this.pos.y += this.vel.y;

        if (this.pos.x<0||this.pos.x>width) {
            this.pos = createVector(random(width), random(height));
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(0.5,0.9))
            this.colorReassign();
        }
        if (this.pos.y<0||this.pos.y>height) {
            this.pos = createVector(random(width), random(height));
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(0.5,0.9))
            this.colorReassign();
        }
    }

    colorReassign() {
        if (!this.black) {
            this.red = 0;
            this.gre = 0;
            this.blu = 0;
            this.black = true;
            this.thick = 4;
        } else {
           this.red = random(255);//random(150,255);
           this.gre = random(255);//random(150,200);
           this.blu = random(255);//random(0,150);
           this.black = false;
           this.thick = 2;
        }

    }
}

//sand particle class
class SandParticle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.gravity = 1;
        this.w = 1;
        this.h = 1;
	}
	
	//draw particle
	draw() {
		ctx.fillStyle = "black";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
    gravityUpdate(particles){
        particles[this.y][this.x] = 0;
        if (this.y < canvas.height -1 
            && this.checkNeighbors(particles)){
            this.y += this.gravity;
        }
        particles[this.y][this.x] = 1;
    }

    update(particles){
        this.draw();
        this.gravityUpdate(particles);
    }

    //check if particles array has particle in all directions
    checkNeighbors(particles){
        let down = particles[this.y + 1][this.x]
        let left = particles[this.y + 1][this.x - 1]
        let right = particles[this.y + 1][this.x + 1]

        // ctx.fillStyle = "green";
        // ctx.fillRect(this.x, this.y + 1, 1,1);
        // ctx.fillRect(this.x + 1, this.y + 1, 1,1);
        // ctx.fillRect(this.x -1 , this.y + 1, 1,1);


        if (down == 1){
            if (left == 1){
                if (right == 1){
                    return false;
                } else{
                    this.x += 1;
                }
            } else{
                this.x -= 1;
            }
        } 
        return true;
    }
}



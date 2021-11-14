//sand particle class
class SandParticle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.gravity = 9.87;
        this.w = 1;
        this.h = 1;
	}
	
	//draw particle
	draw() {
		ctx.fillStyle = "black";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
    gravityUpdate(particles){
        if (this.y <= canvas.height - this.h){
            this.y += this.gravity;
        }
        if (this.collide(particles)){
            this.x += Math.floor(Math.random() * 1)*2;
        }
    }

    update(particles){
        this.draw();
        this.gravityUpdate(particles);
    }

    //check if particle collides with all particles
    collide(particles){
        for (let i = 0; i < particles.length; i++){
            if (this.x + this.w > particles[i].x && this.x < particles[i].x + particles[i].w && this.y + this.h > particles[i].y && this.y < particles[i].y + particles[i].h){
                return true;
            }
        }
        return false;
    }
}

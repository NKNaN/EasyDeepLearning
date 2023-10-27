const cvs = document.getElementById("background");
const ctx = cvs.getContext("2d");

function init() {
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height = window.innerHeight * devicePixelRatio;
}

init();

function randomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

class Point {
    constructor() {
        this.radius = 3;
        this.X = randomInt(0, cvs.width - this.radius/2);
        this.Y = randomInt(0, cvs.height - this.radius/2);
        this.xSpeed = randomInt(-50, 50);
        this.ySpeed = randomInt(-50, 50);
        this.lastDrawTime = null;
    }

    draw() {
        if (this.lastDrawTime) {
            const duration = (Date.now() - this.lastDrawTime)/1000;
            const xDis = this.xSpeed * duration;
            const yDis = this.ySpeed * duration;
            var X = this.X + xDis;
            var Y = this.Y + yDis
            if (X > cvs.width - this.radius/2) {
                X = cvs.width - this.radius/2;
                this.xSpeed = -this.xSpeed;
            } else if (X < 0) {
                X = 0;
                this.xSpeed = -this.xSpeed;
            }
            if (Y > cvs.height - this.radius/2) {
                Y = cvs.height - this.radius/2;
                this.ySpeed = -this.ySpeed;
            } else if (Y < 0) {
                Y = 0;
                this.ySpeed = -this.ySpeed;
            }
            this.X = X;
            this.Y = Y;
        }
        //
        ctx.beginPath();
        ctx.arc(this.X, this.Y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgb(200,200,200)`;
        ctx.fill();
        this.lastDrawTime = Date.now();
    }
}

class Graph {
    constructor(pointsNum = 30, maxDistance = 400) {
        this.points = new Array(pointsNum).fill(0).map(() => new Point());
        this.maxDistance = maxDistance;
    }

    draw() {
        requestAnimationFrame(() => {
            this.draw();
        })
        ctx.clearRect(0,0,cvs.width, cvs.height);
        for (let i=0; i<this.points.length; i++) {
            const p = this.points[i];
            p.draw();
            for (let j=i+1; j<this.points.length; j++) {
                const p2 = this.points[j];
                const d = Math.sqrt(Math.pow(p.X-p2.X, 2) + Math.pow(p.Y-p2.Y, 2));
                if (d > this.maxDistance) {
                    continue;
                }
                ctx.beginPath();
                ctx.moveTo(p.X, p.Y);
                ctx.lineTo(p2.X, p2.Y);
                ctx.closePath();
                ctx.strokeStyle = `rgba(200,200,200,${1-d/this.maxDistance})`;
                ctx.stroke();
            }
        }
    }
}

var g;
if (window.innerWidth/window.innerHeight > 1) {
    g = new Graph(Math.floor(window.innerHeight/30), Math.floor(window.innerHeight/2));
} else {
    g = new Graph(Math.floor(window.innerWidth/30), Math.floor(window.innerWidth/3*2));
}
g.draw();
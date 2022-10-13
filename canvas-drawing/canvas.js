var canvas = document.querySelector("canvas");
console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = 'rgba(255,0,0,0.2)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.2)';
// c.fillRect(300, 300, 100, 100);

// c.beginPath();
// c.moveTo(50,50);
// c.lineTo(300, 100);
// c.lineTo(100, 100);
// c.lineTo(300,300);
// c.strokeStyle = "grey";
// c.stroke();


// for (var i = 0; i<100; i++){
//     c.beginPath();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.arc(x, y, 30, 0, Math.PI*2);
//     c.strokeStyle = "blue";
//     c.stroke();
// }


// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 2 * 5;
// var dy = (Math.random() - 0.5) * 2 * 5;
// var r = 30;

function Circle(x, y, dx, dy, r){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*2);
        c.strokeStyle = "blue";
        c.stroke();
    }

    this.update = function(){
        if(this.x > innerWidth-this.r || this.x < this.r){
            this.dx *= -1;
        }
        if(this.y > innerHeight-this.r || this.y < this.r){
            this.dy *= -1;
        }
        this.x+=this.dx;
        this.y+=this.dy
    }
}

var circle = new Circle(200, 200, 5, 5, 30);

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circle.draw();
    circle.update()
}

animate();
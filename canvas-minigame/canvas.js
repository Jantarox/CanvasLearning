var canvas = document.querySelector("canvas");

canvas.width = 500;
canvas.height = 600;

var c = canvas.getContext("2d");

setInterval(draw, 10);
var i = 0;
var di = 1;

function Circle(x, y, dx, dy, r, id) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.id = id;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.strokeStyle = "blue";
        c.stroke();
    }

    this.update = function () {
        //Colision with boundaries
        if (this.x > canvas.width - this.r || this.x < this.r) {
            this.dx *= -1;
        }
        if (this.y > canvas.height - this.r || this.y < this.r) {
            this.dy *= -1;
            this.dy *= 0.8;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

function Bullet(x, y, id) {
    this.x = x;
    this.y = y;
    this.dy = -2;
    this.r = 5;
    this.id = id;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.strokeStyle = "blue";
        c.stroke();
    }

    this.update = function () {
        //Colision with boundaries
        if (this.y > canvas.height - this.r || this.y < this.r) {
            bullets = bullets.filter(bullet => bullet.id !== this.id);
        }
        this.hit();

        this.y += this.dy;
        this.draw();
    }

    this.hit = function(){
        circles.forEach((circle) => {
            var x1 = Math.pow(this.x - circle.x, 2);
            var y1 = Math.pow(this.y - circle.y, 2);
            var distance = Math.sqrt(x1 + y1);
            if(distance <= circle.r + this.r){
                console.log(circle.id);
                bullets = bullets.filter(bullet => bullet.id !== this.id);
                circles = circles.filter(circle1 => circle.id !== circle1.id);
            }
        })
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if(key === "ArrowLeft"){
        rect.moveLeft();
    }else if(key === "ArrowRight"){
        rect.moveRight();
    }else if(key === " "){
        rect.shoot();
    }
})

function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draw = function () {
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.strokeStyle = "black";
        c.stroke();
    }

    this.moveLeft = function(){
        this.x -= 5;
        this.update();
    }

    this.moveRight = function(){
        this.x += 5;
        this.update();
    }

    this.shoot = function(){
        bullets.push(new Bullet(this.x + this.width/2, this.y, i));
    }

    this.update = function () {
        this.draw();
    }
}

var bullets = [];
var circles = [];
var rect = new Rectangle(300, 500, 50, 50);

function draw() {
    i += di;
    c.clearRect(0, 0, canvas.width, canvas.height);

    if(i % 100 == 0 && circles.length < 5){
        var x = Math.random() * (canvas.width - 40) + 20;
        var y = Math.random() * (canvas.height - 200) + 20;
        circles.push(new Circle(x, y, 0, 0, 20, i));
    }

    circles.forEach((circle) => {
        circle.update();
    })
    rect.update();
    bullets.forEach((bullet) => {
        bullet.update();
    })
}
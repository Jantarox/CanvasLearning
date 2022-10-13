var canvas = document.querySelector("canvas");
console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillRect(100, 100, 100, 100);

c.beginPath();
c.moveTo(50,50);
c.lineTo(300, 100);
c.lineTo(100, 100);
c.strokeStyle = "blue";
c.stroke();


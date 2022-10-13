var canvas = document.querySelector("canvas");
console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillRect(100, 100, 300, 200);

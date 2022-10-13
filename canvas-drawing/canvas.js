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


var x = 200;
var y = 200;

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*2);
    c.strokeStyle = "blue";
    c.stroke();

    x+=1;
}

animate();
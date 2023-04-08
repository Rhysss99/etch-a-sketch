var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var clearBtn = document.getElementById("clearBtn");

console.log(canvas);
console.log(ctx);


var circleRadius=40;

canvas.addEventListener("mousemove", function(event){
    

    var circleX = event.offsetX;
    var circleY = event.offsetY;

    

    
        ctx.beginPath(); 
        ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();

   

});

clearBtn.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});



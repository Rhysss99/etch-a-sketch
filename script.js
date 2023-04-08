var canvas = document.getElementById("myCanvas");
var clearBtn = document.getElementById("clearBtn");
var changeSize = document.getElementById("changeSizeBtn");
var sizeInput = document.getElementById("sizeInput");

console.log(canvas);
console.log(ctx);

var ctx = canvas.getContext("2d");
var circleRadius=10;

canvas.addEventListener("mousemove", function draw(event){
    
    //draws circle at mouse position relative to the canvas
    var circleX = event.offsetX;
    var circleY = event.offsetY;
    
        ctx.beginPath(); 
        ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();
});

clearBtn.addEventListener("click", function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

changeSize.addEventListener("click", function changeSize(){
    var newSize = Number(sizeInput.value);
    if (newSize >=1 && newSize <= 50) {
        circleRadius = newSize;
    } else {
        alert("Please enter a number between 1 and 50.");
    }
})



canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="grey";
/*ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.rec(150, 143, 430, 200);
ctx.stroke();*/


ctx.beginPath();
color="blue";
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();



ctx.beginPath();
color="black";
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
color="red";
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(500,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
color="yellow";
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(350,240,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
color="green";
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(450,240,40,0,2*Math.PI);
ctx.stroke();

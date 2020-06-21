
function changeColor() {
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");

	d1.className = "blueback";
	d2.className = "yellowback";
}

function doColorPink() {
	var d1 = document.getElementById("d1");
	d1.style.backgroundColor = "pink";
	
	var ctx = d1.getContext("2d");
	ctx.fillStyle="black";
	ctx.fillRect(10,10,60,60);
	ctx.fillRect(80,10,60,60);

	ctx.fillStyle = "white";
	ctx.font = "20px Arial";
	ctx.fillText("hello", 15, 45);
	
}

function doColorGreen() {
	var d1 = document.getElementById("d1");
	d1.style.backgroundColor = "green";
}

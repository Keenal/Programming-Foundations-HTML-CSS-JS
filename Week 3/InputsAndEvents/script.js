function makeGreen() {
	var d1 = document.getElementById("id1");	

	d1.style.backgroundColor = "green";
}

function changeColor() {
	var d1 = document.getElementById("id1");
	var clr = document.getElementById("clr");
	d1.style.backgroundColor = clr.value;
}

function doSlide() {
	var d1 = document.getElementById("id1");
	var sizeinput = document.getElementById("sldr");
	var size = sizeinput.value;
	var ctx = d1.getContext("2d");
	ctx.clearRect(0,0,d1.width, d1.height);
	ctx.fillStyle="yellow";
	ctx.fillRect(10,10,size, size);
}
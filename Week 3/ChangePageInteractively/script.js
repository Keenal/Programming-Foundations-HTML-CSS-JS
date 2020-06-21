function change() {
	alert('clicked button');
}

function changeColor() {
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");

	d1.className = "blueback";
	d2.className = "yellowback";
}

function changeText() {
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");

	d1.innerHTML = "Hello";
	d2.innerHTML = "World!";	
}

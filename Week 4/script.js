var image;
var canvasNew;

function loadImage() {
    var canvas = document.getElementById("canvasInput");
    var fileinput = document.getElementById("fileinput");
    image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

function makeGray() {
    for(var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
        canvasNew = document.getElementById("canvasOutput");

        image.drawTo(canvasNew);
    
}
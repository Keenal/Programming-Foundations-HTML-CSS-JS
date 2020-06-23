var image;
var canvasNew;

function upload() {
    var canvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
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
        canvasNew = document.getElementById("canNew");

        image.drawTo(canvasNew);
    
}
// part 1

var orig = new SimpleImage("drewRobert.png");
var newBG = new SimpleImage("dinos.png");
orig.setSize(300,150);
newBG.setSize(300,150);
var output = new SimpleImage(orig.getWidth(), orig.getHeight());

greenBG(orig);


function greenBG(orig) {
    print(orig);
    
    for(var pixel of orig.values()) {
        if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            var x = pixel.getX();
            var y = pixel.getY();
            output.setPixel(x, y, newBG.getPixel(x,y));
        }
        else {
            output.setPixel(pixel.getX(), pixel.getY(), pixel);
        }
    }
    
    print(output);
    
}





//part 2

function swapRedGreen(x) {
    print(x);
    
    for(var pixel of x.values()) {
        var green = pixel.getGreen();
        var red = pixel.getRed();
        
        pixel.setRed(green);
        pixel.setGreen(red);
    }
    
    print(x);
    
}


var redgreen = new SimpleImage("redgreen.png");
redgreen.setSize(200,150);
swapRedGreen(redgreen);


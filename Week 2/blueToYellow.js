//part 2

function swapRedGreen(x) {
    print(x);
    
    for(var pixel of x.values()) {
        if(pixel.getRed() == 0) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
    
    print(x);
    
}


var duke = new SimpleImage("duke_blue_devil.png");
duke.setSize(200,150);
swapRedGreen(duke);


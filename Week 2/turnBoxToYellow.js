// write your code here
var yellowImage = new SimpleImage(200,200);

for(var pixel of yellowImage.values()) {
    var red = 255 - pixel.getRed();
    pixel.setRed(red);
    var green = 255 + pixel.getGreen();
    pixel.setGreen(green);
    var blue = 0;
    pixel.setBlue(blue);
}

print(yellowImage);
    
    

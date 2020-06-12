// write your code here
var yellowImage = new SimpleImage(100,100);
print("Before Transformation:");
print(yellowImage);
for(var pixel of yellowImage.values()) {
    var red = 255 - pixel.getRed();
    pixel.setRed(red);
    var green = 255 + pixel.getGreen();
    pixel.setGreen(green);
    var blue = 0;
    pixel.setBlue(blue);
}
print("After Transformation:");
print(yellowImage);
    
    
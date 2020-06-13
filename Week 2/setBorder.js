// part 3
var image = new SimpleImage("smallpanda.png");
image.setSize(200,150);
print(image);

for (var pixel of image.values()){
    
  var x = pixel.getX();
  var y = pixel.getY();
  var h = image.getHeight();
  var w = image.getWidth();
  
  if (((x < 10) || (x>(w-10))) || ((y<10) || (y>(h-10)))) {
    
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    pixel.setAlpha(255);
    }
}

print(image);






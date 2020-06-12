// write your code here
// part 1

var panda = new SimpleImage("smallpanda.png");
panda.setSize(200,150);
print(panda);
var pwidth = panda.getWidth();
    

for (var pixel of panda.values()) {
    var xC = pixel.getX();
    if(xC < pwidth / 3) {
        pixel.setRed(255);
    }
    else if(xC >= pwidth / 3 && xC <= 2*pwidth / 3) {
        pixel.setGreen(255);
    }
    else if(xC > 2*pwidth / 3){
        pixel.setBlue(255);
    }
}

print(panda);


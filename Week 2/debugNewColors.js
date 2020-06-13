// part 2

// orig
var img = new SimpleImage(150,150);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
    px.setGreen(255);
  }
}
print (img);


// new
var img = new SimpleImage(150,150);

for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x <= img.getWidth()/2 && y <= img.getHeight() / 2){
    px.setRed(255);
    px.setGreen(0);
    px.setBlue(0);
  }
  if(x >= img.getWidth() / 2 && y <= img.getHeight() / 2) {
     px.setRed(0);
    px.setGreen(255);
    px.setBlue(0);
  }
  if(x <= img.getWidth() / 2 && y >= img.getHeight() / 2) {
    px.setRed(255);
    px.setGreen(0);
    px.setBlue(255);
  }
  if(x >= img.getWidth() / 2 && y >= img.getHeight() / 2) {
     px.setRed(0);
    px.setGreen(0);
    px.setBlue(255);
  }
}
print (img);





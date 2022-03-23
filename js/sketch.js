function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}


function draw() {
  background(255);
  ellipseMode(RADIUS);
  for (i = 0; i < mediaBundles.length; i++) {
    mediaBundles[i].over();
    mediaBundles[i].update();
    mediaBundles[i].show();
    for (s = 0; s < mediaBundles[i].objects.length; s++) {
      //  mediaBundles[i].objects[s].updateVals();
    }
  }

}

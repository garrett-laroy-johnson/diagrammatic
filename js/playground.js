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
  stroke(0);
  strokeWeight(2);
  circle(200, 200, 400);
}




function keyPressed() {
  if (key == "n") {
    getName();
  }

  //
  //     let name = prompt("Enter a name for a new MediaBundle", "");
  // let text;
  // if (person == null || person == "") {
  //   text = "User cancelled the prompt.";
  // } else {
  //   text = "Hello " + person + "! How are you today?";
  // }

  //
  // let o = new MediaObject("file", "this", "www", "image");
}


// //trigger drag for given bundle
function mousePressed() {
  for (i = 0; i < mediaBundles.length; i++) {
    mediaBundles[i].pressed();
    return false;
  }

}
//
function doubleClicked() {
  for (i = 0; i < mediaBundles.length; i++) {
    //if the mouse is over the bundle and it is not being dragged, rotate-shift the mediaobject array
    if (mediaBundles[i].rollover) {
      if (mediaBundles[i].dragging == false) {
        mediaBundles[i].objects.unshift(mediaBundles[i].objects.pop());
      }
    }

  }
}

// // here are some dragging fucntions (releases all objects when mouse up) and also click to cycle through objects
function mouseReleased() {
  for (i = 0; i < mediaBundles.length; i++) {
    //release all bundles from this.dragging
    mediaBundles[i].released();
  }
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

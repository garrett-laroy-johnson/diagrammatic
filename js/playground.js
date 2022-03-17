let sf = 1, tx = 0, ty = 0;



//let bundleNames = ["arbo", "sneaky", "wise"];
//let images = [];

function preload() {
 // for (i=0;i<3;i++){
 // for (p=0;p<3;p++){
 //
 //   images[(i+1)*p]=loadImage(`bundles/${bundleNames[i]}/${p}.png`);
// //image[0] = loadImage("./0.png");
// }
// }
// }
}



function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sandbox');

  document.getElementById("sandbox").style.display === "none";
  let s = document.getElementById("sandbox").children;
    for(i = 0; i < s.length ; i++) {
     s[i].style.display = "none";
    }
  //testBundleCreate(); // uncomment to generate test bundles

  imageMode(CENTER);
}




function draw() {
  background(255);
  push()
  strokeWeight(20);
  line(0,0,windowWidth,0);
  pop();
  translate(tx, ty);
  scale(sf);
  ellipseMode(CENTER);

  for (i=0;i<mediaBundles.length;i++){
    mediaBundles[i].over();
    mediaBundles[i].update();
    mediaBundles[i].show();


  }
}



//trigger drag for given bundle
function mousePressed() {
  for (i = 0; i < mediaBundles.length; i++) {
    mediaBundles[i].pressed();
      return false;
  }

}

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
// here are some dragging fucntions (releases all objects when mouse up) and also click to cycle through objects
function mouseReleased() {


  for (i = 0; i < mediaBundles.length; i++) {
          //release all bundles from this.dragging
          mediaBundles[i].released();
  }
}






function applyScale(s) {
    sf = sf * s;
    tx = mouseX * (1-s) + tx * s;
    ty = mouseY * (1-s) + ty * s;
}

// window.addEventListener("wheel", function(e) {
//     applyScale(e.deltaY > 0 ? 1.05 : 0.95);
// } );

function keyPressed() {
    if (key == '-') {
        applyScale(0.95);
    } else if (key == '+') {
        applyScale(1.05);
    }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed() {
  if (keyCode === ESCAPE) {
    let fs = fullscreen();
   fullscreen(!fs);
  }
}

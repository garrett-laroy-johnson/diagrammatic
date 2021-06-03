let zoom;
let x = 0;
let y = 0;
let z = 0;

let h = 20;
let easing = .05;
let img;

let markers = {
  one : {
    x : 200,
    y : 200,
    rotation : 0
  },
  two : {
    x: 0,
    y: 0,
    rotation : 0
  }
}

let bundles = {

}

function preload() {
  owl = loadImage('../bundles/wise/owl.jpg');
  liz = loadImage('../bundles/sneaky/liz.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight-20, WEBGL);
  //  ortho(-width, width, height, -height/2, 0.1, 100);
  zoom = createSlider(0, 3000, 500);
  h = map(0, 0, 6, 5, 85);
  zoom.position(10, height + h);
  zoom.style('width', '80px');

  }

function draw() {
//  console.log(markers.one.x);
  background(0);

  mediaBundle(owl, markers.one);
  mediaBundle(liz, markers.two);

  z = zoom.value();
  //  z = sliderGroup[1].value();
  camera (x, y, (z/2.0) / tan(PI*30.0 / 180.0), x, y, 0, 0, 1, 0);

}

function mouseClicked(){
  if (mouseY<height){
    x = (mouseX-width/2);
    y = (mouseY-height/2);

camera (x, y, (z/2.0) / tan(PI*30.0 / 180.0), x, y, 0, 0, 1, 0)
  }
}

function mediaBundle(name, marker) {

  push();
    //rotate based on marker data
    rotate(0);
    //pass image as texture
    texture(name);
    // move it according to marker data
    translate(marker.x, marker.y);
    plane(400, 400);
  pop();
}

// add new bundle to register of bundles
const newBundle = x => {
    name : x;
}

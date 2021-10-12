let arbo;
let wise;
//let sneaky = [];
//let wise = [];

//dropzone drag and dropzone
let dropzone;
let file;
// gui
//var gui

//let MediaBundles = [arbo, wise, sneaky]; // set of all media bundles

function preload() {
  owl = loadImage('./bundles/wise/owl.jpg');
  tree0 = loadImage('./bundles/arbo/tree.png');
  tree1 = loadImage('./bundles/arbo/tree2.jpg');
  tree2 = loadImage('./bundles/arbo/tree3.png');
  liz = loadImage('./bundles/sneaky/liz.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight-100);
  arbo = new mediaBundle(300, 400, 200, 0);
  wise = new mediaBundle(123, 300, 100, 1);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);

};

function highlight() {
  dropzone.style('background-color','#ccc')
}

function unhighlight() {
  dropzone.style('background-color','#fff')
}

function gotFile(file) {
  let img1 = createImg(file.data);
  image (img1, 0, 0, width, height);
}



function draw() {
  background(255);
  arbo.show();
  wise.show();
}

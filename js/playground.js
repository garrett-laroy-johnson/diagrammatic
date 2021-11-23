let sf = 1, tx = 0, ty = 0;
let bundles = [];
let numBundles = 10;
let bundleNames = ["arbo", "sneaky", "wise"];
let images = [];


function preload() {
 for (i=0;i<3;i++){
 for (p=0;p<3;p++){

   images[(i+1)*p]=loadImage(`bundles/${bundleNames[i]}/${p}.png`);
//image[0] = loadImage("./0.png");
}


}



}

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent('sandbox');
  document.getElementById('sandbox').style.display === "none";
  testBundleCreate();
}

function testBundleCreate(){
  for (let i=0;i<numBundles; i++){
    let x = (window.innerWidth/numBundles)*i;
    let y = window.innerHeight/2;
    let r = random(10,200);
    let ranBundle = Math.floor(random(0,8));
    bundles[i] = new bundle(x, y, r, r, images[ranBundle]);
  }

}


function draw() {
  background(255);
  push()
  strokeWeight(20);
  line(0,0,windowWidth,0);
  pop();
  translate(tx, ty);
  scale(sf);


for (i=0;i<bundles.length;i++){
bundles[i].over();
bundles[i].update();
bundles[i].show();
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

function mousePressed() {
  for (i=0;i<bundles.length;i++){
  bundles[i].pressed();

  }

}

function mouseReleased() {
  for (i=0;i<bundles.length;i++){
  bundles[i].released();


  }

}

function group () {

}

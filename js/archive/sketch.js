let MediaBundles = ["wise"];

// Media bundle contains list of media objects
class MediaBundle {
  constructor(name, mediaObjects) {
    this._mediaObjects = [];
    this._name = name;
//    this.indexaddBundletoS(name){
  //    MediaBundles.push(name);
  //  }
      }
  addMediaObject(newObj) {
    this._mediaObjects.push(newObj);
  }
  removeMediaObject(objName) {
    let index = this._mediaObjects.indexOf(objName);
    if (index > -1) {
      this._mediaObjects.splice(index, 1);
    }

    }
    get MediaObjects() {
      return this.mediaObjects;
  }
}

// parent media object
class MediaObject {
  constructor(name, path) {
    this._name = name;

    this._filepath = path;
  //  this._filetype = this._filepath.substr(this._filepath.lastIndexOf('.') + 1);
  }
  get name() {
    return this._name;
  }
  get path() {
    return this._path;
  }
  get marker() {
    return this._marker;
  }

}

// child media object

class Video extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    this._dimensions = [];
    this._duration = [];
  }
}

class Image extends MediaObject {
  constructor(name, path, img) {
    super(name, path);
    this._dimensions = [];
    this._img = img;
  }
  get img() {
    return this._img;
  }
  drawImg() {
  //  push();
      //rotate based on marker data
      rotate(0);
      //pass image as texture
      texture(this._name);
      // move it according to marker data
      //translate(this._marker.x, this._marker.y);
      translate(200, 200);
      plane(400, 400);
  //  pop();
  }
}

 class Audio extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    this._duration = [];
  }
}

class Text extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    this._text = "";
    this._font = "";
    this._fontSize = "";
  }
}

class BibTeX extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    this._text = "";
    this._font = "";
    this._fontSize = "";
  }
}



let zoom;
let x = 0;
let y = 0;
let z = 0;

let h = 20;
let easing = .05;




function preload() {
//  let liz = loadImage('./bundles/sneaky/liz.jpg');
  let owlimg = loadImage('../bundles/wise/owl.jpg');
  const owl = new Image ("owl", './bundles/wise/owl.jpg', owlimg);
  //const wise = new MediaBundle ("wise", owl)
}

function setup() {

  createCanvas(windowWidth, windowHeight - 20, WEBGL);
  //  ortho(-width, width, height, -height/2, 0.1, 100);
  zoom = createSlider(0, 3000, 500);
  h = map(0, 0, 6, 5, 85);
  zoom.position(10, height + h);
  zoom.style('width', '80px');

}

function draw() {

  background(0);
  z = zoom.value();
  camera(x, y, (z / 2.0) / tan(PI * 30.0 / 180.0), x, y, 0, 0, 1, 0);

//  for (let i = 0; i < MediaBundles.length; i++) {
  //  drawMediaBundle(MediaBundles[i].name, markers.one);
  //}
  owl.drawImg(owl);
}

function mouseClicked() {
  if (mouseY < height) {
    x = (mouseX - width / 2);
    y = (mouseY - height / 2);

    camera(x, y, (z / 2.0) / tan(PI * 30.0 / 180.0), x, y, 0, 0, 1, 0)
  }
}

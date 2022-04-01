//array containing all mediaBundles;
let mediaBundles = [];

let MediaBundle = class {
  constructor(name, index) {
    this.name = name;
    this.x = (width / 4) + (index * 220);
    this.y = height / 2;
    this.w = 200;
    this.h = 200;
    this.index = index;
    this.objects = [];
    this.fiducial = 0;
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.editing = false;
    //  this.filter = (BLUR, 0);
    this.gui;
    this.obj_guis = [];
    this.params = {

      //interface/style options on off
      header: true,
      foregroundColor: [255, 255, 255],
      backgroundColor: [0, 0, 0],

      headerTextSize: 14,
      headerTextFont: "monospace",

      bgBox: true,
      borderWeight: 8,


      scramble: true,
      scatter: true,
      scatterRadius: 200,


      useFiducialMarker : false,
      anchorToMarker: "0",
    };
    this.buildGUI();
  }

  buildGUI() {
    let self = this;
    this.gui = QuickSettings.create(this.index*210, 10, `${this.name}`)
      .bindText("name", `${this.name}`, this)
      .bindBoolean("header", true, this.params)
      .bindBoolean("bgBox", true, this.params)
      .bindRange("borderWeight", 0, 20, 5, 1, this.params)
      .bindDropDown("headerTextFont", ["serif", "sans-serif", "monospace", "cursive", "fantasy"], this.params)
      .bindColor("backgroundColor", "#ffffff", this.params)
      .bindColor("foregroundColor", "#000000", this.params)
      .bindRange("headerTextSize", 6, 200, 14, 1, this.params)
      //  .addFileChooser("addMediaObjectFile","Add New Media Object", "", this.handleFile.bind(mediaBundles[this.index]))
      .bindBoolean("scatter", false, this.params)
      .bindRange("scatterRadius", 1, 1000, 200, 10, this.params)
      .addButton("randomize scatter", this.scatterObjects(self))
      .bindBoolean("scramble", false, this.params)
      .bindBoolean("useFiducialMarker", false, this.params)
      .addDropDown("anchorToMarker", markerAdmin.IDs, function (object){self.fiducial = object.index})
      mbPanels.push(this.gui);
  }
  scatterObjects(self) {
    console.log(self);
for (let object of self.objects){
  object.gui.params.offsetX = random(-200,200);
  object.gui.params.offsetY = random(-200,200);
}
  }
  //
  // //this function handles ADD MEDIA OBJECT file inputs
  handleFile(file) {
    // parse out the files
    // get info to make a mediaObject
    let obj;
    let name = file.name.split(' ')
    name = name[0];

    if (file.type === 'image') {
      let img = createImg(file.data).hide();
      let index = this.objects.length;
      obj = new ImageObject(file, name, img, index);
    }

    else if (file.type == 'video')

    {
      let vid = createVideo(file.data).hide();
      let index = this.objects.length;
      obj = new VideoObject(file, name, vid, index);
    }

    console.log(obj);
    this.objects.push(obj);

  }

  destructor() {
    delete mediaBundles(this.index);
  };

  get position() {
    return (this.x, this.y);
  }

  over() {
    // Is mouse over object

    if (mouseX > this.x - (this.w/2) && mouseX < this.x + (this.w/2) && mouseY > this.y - (this.h/2) && mouseY < this.y + (this.h/2)) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }
  update() {

    if (this.addMediaObject) {
      this.addMediaObject = false;
      this.newObject();
    }

    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY
    }
  };
  show() {

    if (this.params.useFiducialMarker){

      this.x = (1-markerAdmin.markers[this.fiducial].x) * width;
      this.y = (1-markerAdmin.markers[this.fiducial].y) * height;


}

    if (this.params.bgBox) {
      push();
      rectMode(CENTER);
      noFill();

      translate(this.x, this.y);
      if (this.rollover) {
        stroke(this.params.foregroundColor);
      }
            else {
        stroke(this.params.backgroundColor);
      }
      strokeWeight(this.params.borderWeight);
      rect(0, 0, this.w, this.h)
      pop()
    }
    if (this.params.header) {
      push();
   rectMode(CENTER);
      noStroke();

      if (this.rollover) {
        fill(this.params.foregroundColor);
      } else {
        fill(this.params.backgroundColor);
      }

      rect(this.x, this.y - (this.h/2), this.w + this.params.borderWeight, this.params.headerTextSize + textDescent());
      textFont(this.params.headerTextFont);
      textSize(this.params.headerTextSize);

      if (this.rollover) {
        fill(this.params.backgroundColor);
      } else {
        fill(this.params.foregroundColor);
      }
      text(this.name, this.x, this.y - (this.h/2), this.w + this.params.borderWeight, this.params.headerTextSize + textDescent());
      pop()
    }



    if (this.params.scramble && this.params.scatter) {
      let xPos = this.x;
      let yPos = this.Y

      for (let m = 0; m < this.objects.length; m++) {
        push();
        let angle = Math.PI * 2 / this.objects.length;

        let xPos = this.x + this.objects[m].params.offsetX + cos(angle * m) * this.params.scatterRadius
        let yPos = this.y + this.objects[m].params.offsetY - sin(angle * m) * this.params.scatterRadius;

        translate(xPos, yPos)
        scale(this.objects[m].params.scale);
        image(this.objects[m].img, 0, 0, this.objects[m].width, this.objects[m].height);
        pop();
      }
    } else if (this.params.scramble) {
      for (let m = 0; m < this.objects.length; m++) {
        image(this.objects[m].img, this.x + this.objects[m].offset[0], this.y + this.objects[m].offset[1], this.objects[m].width, this.objects[m].height);
      }
    } else if (this.scatter) {
      for (let m = 0; m < this.objects.length; m++) {
        let angle = Math.PI * 2 / this.objects.length;
        let xPos = this.x + cos(angle * m) * this.params.scatterRadius;
        let yPos = this.y - sin(angle * m) * this.params.scatterRadius;
        image(this.objects[m].img, xPos, yPos, this.objects[m].width, this.objects[m].height);
      }
    } else {
      for (let m = 0; m < this.objects.length; m++) {
        image(this.objects[m].img, this.x, this.y, this.objects[m].width, this.objects[m].height);
      }
    }
  }
  // }

  pressed() {
    // Did I click on the rectangle?
    if (this.rollover) {
      this.dragging = true;

      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;

    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>


//A Pen by Brian J. Cardiff on CodePen : https://gist.github.com/bcardiff/3b39ba8e2d00fed68435

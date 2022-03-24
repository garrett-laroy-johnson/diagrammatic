//array containing all mediaBundles;
let mediaBundles = [];

let MediaBundle = class {
  constructor(name, index) {
    this.name = name;
    this.x = width / 2;
    this.y = height / 2;
    this.w = 400;
    this.h = 600;
    this.index = index;
    this.marker;
    this.objects = [];
    this.fileList = [];
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.editing = false;
    //  this.filter = (BLUR, 0);
   this.gui;
    this.params = {

      //interface/style options on off
      header: true,
      headerTextColor: [255, 255, 255],
      headerBGColor: [0, 0, 0],

      headerTextSize: 30,
      headerTextFont: "monospace",

      bgBox: true,
      scramble: true,
      scatter: true,

    };
    this.buildGUI();
  }

  buildGUI() {
   this.gui =  QuickSettings.create(5, 5, `${this.name}`)

      .bindBoolean("scatter", false, this.params)
      .bindBoolean("scramble", false, this.params)
      .bindBoolean("header", true, this.params)
      .bindDropDown("headerTextFont", ["serif", "sans-serif", "monospace", "cursive", "fantasy"], this.params)
      .bindColor("headerBGColor", "white", this.params)
      .bindColor("headerTextColor", "black", this.params)
      .bindRange("headerTextSize", 6, 200, 30, 1, this.params)
      .addFileChooser("addMediaObjectFile","Add New Media Object", "", this.handleFile)
  }

  //this function handles ADD MEDIA OBJECT file inputs
  handleFile(file) {    // parse out the files
    // get info to make a mediaObject
      let name = file.name.split(' ')
      let path = URL.createObjectURL(file);
      createObject(file, name, path);
  }

  destructor() {
    delete mediaBundles(this.index);
  };

  get position() {
    return (this.x, this.y);
  }

  over() {
    // Is mouse over object
    if (this.params.header) {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.params.headerTextSize) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }

    } else {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    }
  };
  update() {

    if(this.addMediaObject){
      this.addMediaObject=false;
      this.newObject();
    }

    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY
    }
  };
  show() {

    if (this.params.bgBox) {
      push();
      noFill();
      rectMode(CORNER);
      stroke(0,255,255);
      strokeWeight(8);
      rect(this.x, this.y, this.w, this.h)
      pop()
    }
    if (this.params.header) {
      let head = this.name;
      push();
      rectMode(CORNER);
      noStroke();
      fill(this.params.headerBGColor);
      textFont(this.params.headerTextFont);
      textSize(this.params.headerTextSize);
      rect(this.x, this.y, this.w, this.params.headerTextSize + textDescent());
      fill(this.params.headerTextColor);
      text(head, this.x, this.y + textAscent());
      pop()
    }



    if (this.params.scramble && this.params.scatter) {


      for (let m = 0; m < this.objects.length; m++) {

        let angle = Math.PI * 2 / this.objects.length;

        let xPos = this.x + cos(angle * m) * 200;
        let yPos = this.y - sin(angle * m) * 200;

        imageMode(CORNER);
        image(this.objects[m].img, xPos + this.objects[m].offset[0], yPos + this.objects[m].offset[1], this.w, this.h);
      }
    } else if (this.params.scramble) {
      for (let m = 0; m < this.objects.length; m++) {
        image(this.objects[m].img, this.x + this.objects[m].offset[0], this.y + this.objects[m].offset[1], this.w, this.h);
      }
    } else if (this.scatter) {
      for (let m = 0; m < this.objects.length; m++) {
        let angle = Math.PI * 2 / this.objects.length;
        let xPos = this.x + cos(angle * m) * 200;
        let yPos = this.y - sin(angle * m) * 200;
        image(this.objects[m].img, xPos, yPos, this.w, this.h);
      }
    } else {
      for (let m = 0; m < this.objects.length; m++) {
        image(this.objects[m].img, this.x, this.y, this.w, this.h);
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

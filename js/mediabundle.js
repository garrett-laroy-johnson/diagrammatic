
//array containing all mediaBundles;
let mediaBundles = [];

let MediaBundle = class {
  constructor(name, index) {
    this.name = name;
    this.x = width/2;
    this.y = height/2;
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

    this.gui = createGui(`${this.name}`);

    this.params = {

       //interface/style options on off
        header : true,
        headerTextColor : [255,255,255],
        headerBGColor : [0,0,0],
        headerTextSize: 30,
        headerTextSizeMin:12,
        headerTextSizeMax:400,
        headerTextSizeStep:2,

        bgbox : true,
        scramble : true,
        halo : true,

      // image scale
        scale : 1.0,
        scaleMin : 0.1,
        scaleMax : 5,
        scaleStep: 0.1,

        //offset
        offsetY : [random(200) - 100, random(200) - 100],
        offsetYMin : 0.0,
        offsetYMax: 1000.0,
        offsetYStep: 1.0,

        offsetX : [random(200) - 100, random(200) - 100],
        offsetXMin : 0,
        offsetXMax: 1000,
        offsetXStep: 1.0,
    };
    this.buildGUI();
    }

  buildGUI () {
    this.gui.addObject(this.params);
    this.gui.addButton("add MediaObject", function(){
      getFile()});
}

  //this function handles ADD MEDIA OBJECT file inputs
  // it's also loading images right now, and assuming that all inputs are images
  handleFile() {
    // assign the files to the object key
    this.fileInput = document.getElementById(this.ui.fileGrab);
    // parse out the files
    let files = this.fileInput.files;
    // get info to make a mediaObject
    for (i = 0; i < files.length; i++) {

      let name = files[i].name.split(' ')[0]

      let path = URL.createObjectURL(files[i]);

      this.createObject(files[i], name, path);
    //  this.createObjUI(files[i], name, path)

    }
}

  destructor() {
    delete mediaBundles(this.index);
  }

  createObject(file, name, path) {
    let type = "image";
    let b = new MediaObject(file, name, path, type);
    this.objects.push(b);
    b.createObjUI(this.index);
  }

  get position() {
    return (this.x, this.y);
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;

      push();
      ellipseMode(CORNER);
      strokeWeight (10);
      stroke(0,255,255);
      noFill();
      circle(this.x, this.y, this.w, this.h);

      pop();

    }
  }

  show() {

    if (this.params.bgBox){
    }

    if (this.params.header) {
      let head = this.name;
      push();
      fill(this.headerBGColor);
      rect(this.x, this.y - 20, 200, 10);
      //stroke(255);
      fill(this.headerTextColor);
      textSize(this.headerTextSize);
      text(head, this.x, this.y - 10);
      pop();
    }
    // if (this.img) {
    //   image(this.img, this.x,this.y, this.w, this.h);
    // }
    else {
if (this.dragging){
  push();
  noStroke()
  fill(255,0,0);
  rect(this.x, this.y, 200, 200);

  pop();
}
else {

      push();
      rect(this.x, this.y, 200, 200);
      stroke(0);
      pop();
      //  text(s, this.x, this.y, 200, 200);
}
    }

    // Different fill based on state
    // if (this.fileVars.length>0){


    imageMode(CORNER);
    if (this.params.scramble && this.params.halo) {


      for (let m = 0; m < this.objects.length; m++) {

        let angle = Math.PI * 2 / this.objects.length;

        let xPos = this.x + cos(angle * m) * 200;
        let yPos = this.y - sin(angle * m) * 200;


        image(this.objects[m].img, xPos + this.objects[m].offset[0], yPos + this.objects[m].offset[1], this.w, this.h);

      }




    } else if (this.params.scramble) {
      for (let m = 0; m < this.objects.length; m++) {
        image(this.objects[m].img, this.x + this.objects[m].offset[0], this.y + this.objects[m].offset[1], this.w, this.h);
      }
    } else if (this.halo) {



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



toggleScramble() {
  let checkBox = document.getElementById(`${this.ui.scramble}`);
  this.scramble = checkBox.checked;

}

toggleStack() {
  let checkBox = document.getElementById(`${this.ui.stack}`);
  this.halo = !checkBox.checked;

}

toggleGradient() {
  let checkBox = document.getElementById(`${this.ui.gradient}`);
  this.gradient = checkBox.checked;
  //= this.ui.header;
}




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

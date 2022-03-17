//array containing all mediaBundles;
let mediaBundles = [];

let MediaBundle = class {
  constructor(name, index, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.w = w;
    this.h = h;
    this.y = y;
    this.center = [x + (w / 2), y + (h / 2)];
    this.index = index;
    this.marker;
    this.objects = [];
    this.ui = {};
    this.bgBox = true;
    this.fileInput;
    this.fileList = [];
    this.fileVars = [];
    this.index;
    this.scramble = true;
    this.halo = true;
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.editing = false;
    //  this.filter = (BLUR, 0);
    this.img = [];
    this.header = true;
    this.aura = {
      circum: 2 * this.w
    }
    this.gradient = false;
    this.particles = {
      active: false,
      number: 20,
      scale: .5,
      palette: ['#fec5bb', '#fcd5ce', '#fcd5ce', '#fcd5ce', '#e8e8e4', '#d8e2dc', '#ece4db', '#ffe5d9', '#ffd7ba', '#fec89a'],
      speed: {
        x: 2,
        y: 2
      },
      x: [],
      y: []
    };


  }


  createUI() {

    this.ui = {
      // set IDs for HTML DOM elements that need JS interaction
      module: this.name + "_module",
      title: this.name + "_title",
      scramble: this.name + "_scramble",
      trash: this.name + "_trash",
      fileGrab: this.name + "_fileGrab",
      fileGrabButton: this.name + "_fileGrabButton",
      nav: this.name + "_nav",
      header: this.name + "_header",
      gradient: this.name + "_gradient",
      stack: this.name + "_stack",
      particles: this.name + "_particles",
      tab: this.name + "_tab",
      rename: this.name + "_rename",
      renameLabel: this.name + "_renameLabel",
      renameButton: this.name + "_renameButton",
      objTabs: []
    };


    let clone = mbEdit.content.cloneNode(true);
    //set HTML module ID, create onclick behavior to trigger editing selector styling
    clone.querySelector("div").id = this.ui.module;
    clone.querySelector("div").setAttribute("onclick", `editing(${this.ui.module})`);
    // set header module, create onclick behavior to change object state
    clone.getElementById("displayHeader").id = this.ui.header;
    clone.getElementById(this.ui.header).setAttribute("onclick", `mediaBundles[${this.index}].toggleHeader()`);
    // set particles module, create onclick behavior to change object state
    clone.getElementById("displayParticles").id = this.ui.particles;
    clone.getElementById(this.ui.particles).setAttribute("onclick", `mediaBundles[${this.index}].toggleParticles()`);

    // set particles module, create onclick behavior to change object state
    clone.getElementById("scrambleObjects").id = this.ui.scramble;
    clone.getElementById(this.ui.scramble).setAttribute("onclick", `mediaBundles[${this.index}].toggleScramble()`);

    // set particles module, create onclick behavior to change object state
    clone.getElementById("stackObjects").id = this.ui.stack;
    clone.getElementById(this.ui.stack).setAttribute("onclick", `mediaBundles[${this.index}].toggleStack()`);




    // set header module, create onclick behavior to change object state
    clone.getElementById("displayGradient").id = this.ui.gradient;
    clone.getElementById(this.ui.gradient).setAttribute("onclick", `mediaBundles[${this.index}].toggleGradient()`);

    // set trash module, create onclick behavior to trigger destructor()
    clone.querySelector("svg").id = this.ui.trash;
    clone.querySelector("svg").setAttribute("onclick", `mediaBundles[${this.index}].destructor()`);

    //display unique mediabundle name, give it a DOM ID if need to change it.
    clone.querySelector("h3").id = this.ui.title;
    clone.getElementById(this.ui.title).textContent = this.name;
    //clone inputs

    clone.getElementById("fileGrab").id = this.ui.fileGrab;

    clone.getElementById("objTab").id = this.ui.tab;


    clone.getElementById("fileGrabButton").id = this.ui.fileGrabButton;

    clone.getElementById(this.ui.fileGrabButton).setAttribute("onClick", `mediaBundles[${this.index}].handleFile()`);

    //clone.getElementById(this.ui.input).addEventListener("change", this.handleFile);

    clone.querySelector("ul").id = this.ui.nav;
    main.appendChild(clone);

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

  //  this.updateUI(files.length);

    logMB(files.length, "newObj");
  //  this.fileInput.value = 'uhhh';
  }

  loadMedia(list) {
    for (i = 0; i < list.length; i++) {


    }
  }


  updateUI(length) {
    // clone new tab
    let t = document.getElementById(this.ui.tab);

    // create reference for nav container
    let parentNav = document.getElementById(this.ui.nav);

   // get template editor code; NOTE: this is generic and will need to change for different media types;
    let tEdit = document.getElementById("objPaneImg");
    let editParent = document.getElementById("myTabContent");
    // iterate through new files and create tabs for them.
    for (i = 0; i < length; i++) {
      let clone = t.cloneNode(true);
      clone.id = `${this.name}_objTabs_${i}`;

      let editClone = tEdit.cloneNode(true);
      editClone.id = `${this.name}_objTabEditor_${i}`;

      editClone.querySelector("img").setAttribute("src", `${this.objects[i].path}` )

      editClone.querySelector("label").id = this.ui.renameLabel;
      editClone.querySelector("label").setAttribute("for", this.ui.rename)

      editClone.querySelector("input").id = this.ui.rename;
      editClone.querySelector("input").setAttribute("value", "rename" )

      editClone.querySelector("button").id = this.ui.renameButton;
      editClone.querySelector("button").setAttribute("onclick", `this.updateName(${this.objects[i].name})`);

  //    editClone.querySelector("input").setAttribute("onchange", `${this.updateName(this.value)}` )


      let link = clone.querySelector("button");

      link.setAttribute("data-bs-target", `#${this.name}_objTabEditor_${i}`);
      link.innerHTML = `${this.objects[i].name}`;

      parentNav.appendChild(clone);
      editParent.appendChild(editClone);
    }
  }



  destructor() {
    document.getElementById(this.ui.module).remove();
    //div.remove();
    //mediaBundles.splice(this.index,1)
    delete mediaBundles(this.index);
  }

  createObject(file, name, path) {
    let b = new MediaObject(file, name, path);
    this.objects.push(b);
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
      for (let i = 0; i < this.particles.number; i++) {
        this.particles.y[i] = this.offsetY + mouseY;
        this.particles.x[i] = this.offsetX + mouseX;
      }
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

    if (this.bgBox){

    }



    if (this.gradient) {
      //let h = random(0, 360);
      push();
      noStroke();
      let circum = this.w * 2;
      for (let r = circum; r > 0; --r) {
        fill((r / circum) * 255);
        ellipse(this.x + (this.w / 2), this.y + (this.h / 2), r, r);
      }
      pop();
    }

    if (this.particles.active) {
      let circum = this.particles.scale * this.w;
      let rad = circum / 2;
      let c;
      //init x and y

      //iterate across particles color per palette
      for (let i = 0; i < this.particles.number; i++) {

        if (i < this.particles.palette.length) {
          c = color(this.particles.palette[i]);
        } else {
          c = color(this.particles.palette[i % this.particles.palette.length]);
        }

        //draw gradient
        for (let w = circum; w > 0; --w) {
          noFill();
          strokeWeight(1);
          c.setAlpha(255 - (w / circum) * 255);
          stroke(c);
          circle(this.particles.x[i], this.particles.y[i], w);
        }
        //move particle
        this.particles.x[i] += this.particles.speed.x;
        this.particles.y[i] += this.particles.speed.y;
        //sensewalls

        if (this.particles.x[i] > this.x + this.w - rad || this.particles.x[i] < rad) {
          this.particles.speed.x = -this.particles.speed.x;
        }
        if (this.particles.y[i] > this.y + this.h - rad || this.particles.y[i] < rad) {
          this.particles.speed.y = -this.particles.speed.y;
        }
      }

    }

    if (this.header) {
      let head = this.name;
      push();
      fill(0);
      rect(this.x, this.y - 20, 200, 10);
      //stroke(255);
      fill(255);
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
    if (this.scramble && this.halo) {


      for (let m = 0; m < this.objects.length; m++) {

        let angle = Math.PI * 2 / this.objects.length;

        let xPos = this.x + cos(angle * m) * 200;
        let yPos = this.y - sin(angle * m) * 200;


        image(this.objects[m].img, xPos + this.objects[m].offset[0], yPos + this.objects[m].offset[1], this.w, this.h);

      }




    } else if (this.scramble) {
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


toggleHeader() {
  let checkBox = document.getElementById(`${this.ui.header}`);
  this.header = checkBox.checked;

}

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

toggleParticles() {
  let checkBox = document.getElementById(`${this.ui.particles}`);
  // on affirmative check, generate starting points.
  if (checkBox.checked) {
    for (let i = 0; i < this.particles.number; i++) {
      this.particles.x.push(this.center[0] + (random(this.aura.circum) / 2));
      this.particles.y.push(this.center[1] + (random(this.aura.circum) / 2));
    }
  }
  this.particles.active = checkBox.checked;
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











function createMB() {
  //grab + process name
  let inputName = document.getElementById("newMBname").value; //grab the input from the form
  inputName = inputName.replace(/\s/g, "_"); //remove spaces, add underscore
  //check for duplicates
  if (checkName(inputName, "mediaBundle")) {
    logMB(inputName, "duplicate"); //creates notice for the log
  } else {
    let b = new MediaBundle(inputName, mediaBundles.length, (width / 2), (height / 2), 200, 200); //creates new JSON
    mediaBundles.push(b); //adds name of JSON to list of bundles
    updateIndex();
    b.createUI();

    //showMB(inputName);
    logMB(b.name, "created"); //creates notice for the log
  }
}

// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>


//A Pen by Brian J. Cardiff on CodePen : https://gist.github.com/bcardiff/3b39ba8e2d00fed68435

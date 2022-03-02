//console.log(tab);
let mediaBundles = [];
let numBundles = 10;
//this should eventually be individually generated in each media object
//let palette = [rgba(255,255,255,255),rgba(255,255,255,255),rgba(255,255,255,255),rgba(255,255,255,255),rgba(255,255,255,255),rgba(255,255,255,255)]
/* Extended Array */
// [{"name":"Melon","hex":"fec5bb","rgb":[254,197,187],"cmyk":[0,22,26,0],"hsb":[9,26,100],"hsl":[9,97,86],"lab":[84,19,13]},{"name":"Pale Pink","hex":"fcd5ce","rgb":[252,213,206],"cmyk":[0,15,18,1],"hsb":[9,18,99],"hsl":[9,88,90],"lab":[88,13,9]},{"name":"Misty Rose","hex":"fae1dd","rgb":[250,225,221],"cmyk":[0,10,12,2],"hsb":[8,12,98],"hsl":[8,74,92],"lab":[91,8,5]},{"name":"Isabelline","hex":"f8edeb","rgb":[248,237,235],"cmyk":[0,4,5,3],"hsb":[9,5,97],"hsl":[9,48,95],"lab":[95,3,2]},{"name":"Platinum","hex":"e8e8e4","rgb":[232,232,228],"cmyk":[0,0,2,9],"hsb":[60,2,91],"hsl":[60,8,90],"lab":[92,-1,2]},{"name":"Alabaster","hex":"d8e2dc","rgb":[216,226,220],"cmyk":[4,0,3,11],"hsb":[144,4,89],"hsl":[144,15,87],"lab":[89,-4,2]},{"name":"Linen","hex":"ece4db","rgb":[236,228,219],"cmyk":[0,3,7,7],"hsb":[32,7,93],"hsl":[32,31,89],"lab":[91,1,5]},{"name":"Champagne Pink","hex":"ffe5d9","rgb":[255,229,217],"cmyk":[0,10,15,0],"hsb":[19,15,100],"hsl":[19,100,93],"lab":[93,7,9]},{"name":"Peach Puff","hex":"ffd7ba","rgb":[255,215,186],"cmyk":[0,16,27,0],"hsb":[25,27,100],"hsl":[25,100,86],"lab":[89,10,20]},{"name":"Peach Crayola","hex":"fec89a","rgb":[254,200,154],"cmyk":[0,21,39,0],"hsb":[28,39,100],"hsl":[28,98,80],"lab":[84,13,30]}]

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

    }

    console.log(mediaBundles[0].objects);

    this.updateUI();


  }

  loadMedia(list) {
    for (i = 0; i < list.length; i++) {


    }
  }


  updateUI() {
    // clone new tab
    let t = document.getElementById(this.ui.tab);
    // create reference for nav container
    let parentNav = document.getElementById(this.ui.nav);

    // iterate through new files and create tabs for them.
    for (i = 0; i < this.fileList.length; i++) {
      let clone = t.cloneNode(true);
      clone.id = `${this.name}_objTabs_${i}`;
      let link = clone.querySelector("a");
      link.innerHTML = `${this.fileList[i].name}`

      parentNav.appendChild(clone);
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
    }
  }

  show() {

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
  if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
    this.dragging = true;

    // If so, keep track of relative location of click to corner of rectangle
    this.offsetX = this.x - mouseX;
    this.offsetY = this.y - mouseY;

}
}
drag() {
  // if (this.dragging = true){
  //       strokeWeight (10);
  //       stroke(0);
  //       noFill();
  //       rect(this.x - 10 , this.y - 30, 220, 240);
  // }
}

released() {
  // Quit dragging
  this.dragging = false;
}
}




function mousePressed() {
  for (i = 0; i < mediaBundles.length; i++) {
    mediaBundles[i].pressed();
  }

}

function mouseReleased() {
  for (i = 0; i < mediaBundles.length; i++) {
    mediaBundles[i].released();

  }

}

function group() {

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


let MediaObject = class {
  constructor(file, name, path, varName) {
    this.name = name;
    this.path = path;
    this.type;
    this.width;
    this.height;
    this.file = file;
    this.offset = [random(200) - 100, random(200) - 100];
    this.img = loadImage(path);
  }
}

let s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>


//A Pen by Brian J. Cardiff on CodePen : https://gist.github.com/bcardiff/3b39ba8e2d00fed68435

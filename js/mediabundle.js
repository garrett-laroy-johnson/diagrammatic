let mediaBundles = [];
let numBundles = 10;



let MediaBundle = class {
  constructor(name, index, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.w = w;
    this.h = h;
    this.y = y;
    this.index = index;
    this.marker;
    this.objects = [];
    this.ui = {};
    this.filelist = [];
    this.index;
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.editing = false;
    this.filter = (BLUR, 0);
    this.img;
    }


  createUI() {
    this.ui = {
          // set IDs for HTML DOM elements that need JS interaction
          module : this.name+"_module",
          trash : this.name+"_trash",
          input : this.name+"_input",
          nav : this.name+"_nav",
      }


        let clone = mbEdit.content.cloneNode(true);
        clone.querySelector("div").id = this.ui.module;
        clone.querySelector("div").setAttribute("onclick", `editing(${this.ui.module})`);
        clone.querySelector("svg").id = this.ui.trash;
        clone.querySelector("svg").setAttribute("onclick", `mediaBundles[${this.index}].destructor()`);
        clone.querySelector("h3").textContent = this.name;
        clone.querySelector("input").id = this.ui.input;
        clone.getElementById(this.ui.input).addEventListener("change", this.handleFile, false);
        clone.querySelector("ul").id = this.ui.nav;
          main.appendChild(clone);

  }

  handleFile() {
    console.log(file);
  //  console.log(file.data)
    console.log(this.file);
    this.filelist.push(this.file); /* now you can work with the file list */
    console.log(this.filelist);
    this.updateUI();
    }

    updateUI(){
      for (i=0;i<this.filelist.length;i++){
        let clone = tabModel.content.cloneNode(true);
        //clone.querySelector("a").setAttribute = this.ui.module;
        this.ui.nav.appendChild(clone);

    }
}
   destructor(){
      document.getElementById(this.ui.module).remove();
      //div.remove();
      //mediaBundles.splice(this.index,1)
      delete mediaBundles(this.index);
    }

  createObject(name, origin, path) {
    let b = new MediaObject(name);
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
    }
  }

  show() {
    let head = this.name;
    push();
    fill(0);
    rect(this.x, this.y- 20, 200, 10);
    //stroke(255);
    fill(255);
    text(head, this.x, this.y - 10);
    pop();


    if (this.img) {
      image(this.img, this.x,this.y, this.w, this.h);

    }
    else {
        rect(this.x, this.y, 200, 200);
        stroke(0);
        text(s, this.x, this.y, 200, 200);
    }

    // Different fill based on state

  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      console.log("selected");
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




function mousePressed() {
  for (i=0;i<mediaBundles.length;i++){
  mediaBundles[i].pressed();
  }

}

function mouseReleased() {
  for (i=0;i<mediaBundles.length;i++){
  mediaBundles[i].released();

  }

}

function group () {

}






function createMB() {
  //grab + process name
  let inputName = document.getElementById("newMBname").value; //grab the input from the form
  inputName = inputName.replace(/\s/g, "_"); //remove spaces, add underscore
  //check for duplicates
  if (checkName(inputName, "mediaBundle")) {
    logMB(inputName, "duplicate"); //creates notice for the log
  } else {
    let b = new MediaBundle(inputName, mediaBundles.length, (width/2), (height/2), 200, 200); //creates new JSON
    mediaBundles.push(b); //adds name of JSON to list of bundles
    updateIndex();
    b.createUI();

    //showMB(inputName);
    logMB(b.name, "created"); //creates notice for the log
  }
}


let MediaObject = class {
  constructor(name, path) {
    this.name = name;
    this.path = path;
  }
}

let s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

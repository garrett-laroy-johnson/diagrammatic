//document.body.onload = addElement;

let mediaBundles = [];
let width = window.innerWidth;
let height = window.innerHeight;

//
// let dropbox;
//
// dropbox = document.getElementById("dropbox");
// dropbox.addEventListener("dragenter", dragenter, false);
// dropbox.addEventListener("dragover", dragover, false);
// dropbox.addEventListener("drop", drop, false);

let MediaBundle = class {
  constructor(name, index, x , y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.index = index;
    this.marker;
    //this.editing = false;
  }
  get position() {
    return (this.x, this.y);
  }
}


let MediaObject = class {
  constructor(name, index) {
    this.name = name;
    this.path = path;
  }
}

const editor = {
  editing: "none",
}

function editing(id){

  if (editor.editing != "none"){

  document.getElementById(editor.editing).classList.add('mb');

  document.getElementById(editor.editing).classList.remove('mb-active');

  editor.editing = id;

  document.getElementById(editor.editing).classList.add('mb-active');

  document.getElementById(editor.editing).classList.remove('mb');

  }

  else {

  console.log(id);

  editor.editing = id;

  console.log(editor.editing);

  document.getElementById(editor.editing).classList.add('mb-active');

  document.getElementById(editor.editing).classList.remove('mb');

}

}

// function dragenter(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }
//
// function dragover(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }
//
// function drop(e) {
//   e.stopPropagation();
//   e.preventDefault();
//
//   const dt = e.dataTransfer;
//   const files = dt.files;
//
//   handleFiles(files);
// }

//function draw() {

//for (let i = 0; i < mediaBundles.length; i++) {
//  mediaBundles[i].write();

//  }
//}

function writeDiagram(){
   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mediaBundles));
   var downloadAnchorNode = document.createElement('a');
   downloadAnchorNode.setAttribute("href",     dataStr);
   downloadAnchorNode.setAttribute("download", "diagrammatic.json");
   document.body.appendChild(downloadAnchorNode); // required for firefox
   downloadAnchorNode.click();
   downloadAnchorNode.remove();
 }

 function readDiagram (){ //this is broke. might be a good way to fix: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
   var input = document.createElement('input');
 input.type = 'file';

 input.onchange = e => {

    // getting a hold of the file reference
    var file = e.target.files[0];

var data = JSON.parse(fs.readFileSync(file));
mediaBundles = data;
    }
 input.click();
 }




function deleteMB(name){
console.log(mediaBundles);
name.remove();
let index = mediaBundles.find(element => element === name);
mediaBundles.splice(index,1)
console.log(mediaBundles);
}



function createMB(name) { //if new MB name passes checkName, triggered and create new MediaBundle and trigger showMB


      let b = new MediaBundle(name, mediaBundles.length, (width/2),(height/2)); //creates new JSON
        mediaBundles.push(b); //adds name of JSON to list of bundles

  //  console.log(mediaBundles);

  }

function showMB(name){
  let editor = document.getElementById("mbModel"); // creates interface editor
  let main  = document.getElementById("main");
  let trashName = "trash-"

  // Update something in the template DOM.
  let clone = editor.content.cloneNode(true);
//set div ID
  let div = clone.querySelector("div");
  div.id = name;
// set text accordings
  let h3 = clone.querySelector("h3");
  h3.textContent = name;
// setup trashcan to ID and to  trigger deleteMB()
  let trash = clone.querySelector("svg");
  trash.id = trashName.concat(name);
  trash.setAttribute("onclick", "deleteMB(" + name + ")")
  main.appendChild(clone);

}




function checkName (){ //check to see if name is a repeat, trigger alert if so, otherwise trigger createMB
  let inputName = document.getElementById("newMBname").value; //grab the input from the form
  inputName = inputName.replace(/\s/g, "_"); //remove spaces, add underscore
  if (mediaBundles.includes(inputName) === true) //if media bundle already contains
  {
      $("#MBCreateOutput").empty();
      $("#MBCreateOutput").show();
      document.getElementById("MBCreateOutput").innerHTML = "There is already a MediaBundle called " + inputName + ", please find a new name or edit that one.";
      $("#MBCreateOutput").fadeOut(5000);
      return true;
  }
  else {
  createMB(inputName);
  showMB(inputName);
  logMB(inputName); //creates notice for the log
}
}


function logMB(inputName) {
  $("#MBCreateOutput").empty();
  $("#MBCreateOutput").show();
  document.getElementById("MBCreateOutput").innerHTML = "You've created a MediaBundle called " + inputName;
  $("#MBCreateOutput").fadeOut(5000);

}

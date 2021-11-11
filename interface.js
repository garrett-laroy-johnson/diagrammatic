//document.body.onload = addElement;

let mediaBundles = [];
let width = window.innerWidth;
let height = window.innerHeight;

//HTML edit editor interface template reference
const mbEdit = document.getElementById("mbModel"); // creates interface editor
const  main = document.getElementById("main");
console.log(main);
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
    this.objects = [];
    this.ui = {};
    this.filelist = [];
    //this.editing = false;
    }

  createUI() {
    this.ui = {
          // set IDs for HTML DOM elements that need JS interaction
          module : this.name+"_module",
          trash : this.name+"_trash",
          input : this.name+"_input",
      }
       console.log(this.ui.module);
        let clone = mbEdit.content.cloneNode(true);
        clone.querySelector("div").id = this.ui.module;
        clone.querySelector("svg").id = this.ui.trash;
        clone.querySelector("svg").setAttribute("onclick", "destructor(" + this.name + ")");
        clone.querySelector("h3").textContent = this.name;
        clone.querySelector("input").id = this.ui.input;
        clone.getElementById(this.ui.input).addEventListener("change", this.handleFile, false);
          main.appendChild(clone);

  }

  handleFile() {
    //console.log(file);
  //  console.log(file.data)
    this.filelist = this.files; /* now you can work with the file list */
    console.log(this.filelist)
    }


   destructor(name){
      this.module.remove();
      let index = mediaBundles.find(element => element === name);
      mediaBundles.splice(index,1)
    }

  createObject(name, origin, path) {
    let b = new MediaObject(name);
    this.objects.push(b);
  }
  get position() {
    return (this.x, this.y);
  }

}


let MediaObject = class {
  constructor(name, path) {
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
  } else {
    editor.editing = id;
    document.getElementById(editor.editing).classList.add('mb-active');
    document.getElementById(editor.editing).classList.remove('mb');
} }


function writeDiagram(){
   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mediaBundles));
   var downloadAnchorNode = document.createElement('a');
   downloadAnchorNode.setAttribute("href",     dataStr);
   downloadAnchorNode.setAttribute("download", "diagrammatic.json");
   document.body.appendChild(downloadAnchorNode); // required for firefox
   downloadAnchorNode.click();
   downloadAnchorNode.remove();
 }
//this is broke. might be a good way to fix: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function readDiagram(){
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



function createMB() {
  //grab + process name
  let inputName = document.getElementById("newMBname").value; //grab the input from the form
  inputName = inputName.replace(/\s/g, "_"); //remove spaces, add underscore
  //check for duplicates
  if (checkName(inputName, "mediaBundle")) {
    logMB(inputName, "duplicate"); //creates notice for the log
  } else {
    let b = new MediaBundle(inputName, mediaBundles.length, (width/2),(height/2)); //creates new JSON
    mediaBundles.push(b); //adds name of JSON to list of bundles
    b.createUI();
    //showMB(inputName);
    logMB(b.name, "created"); //creates notice for the log
  }
}

//check to see if name is a repeat.
  function checkName (name, type){
    switch (type) {
      case "mediaBundle":
        return mediaBundles.some(e => e.name === name);
        break;
      case "mediaObject":
        return false;
        console.log("checkName function isn't set up to check media Object names as mediaObjects haven't been implimented yet. gives default false, allowing for duplicate.");
        break;
      }
}



function logMB(inputName, log)
  { // logs feedback to psuedoconsole
  let text;
  switch (log) {
    case "duplicate":
      text = "There is already a MediaBundle called " + inputName + ", please find a new name or edit that one.";
      break;
    case "created":
      text = "You have successfully created a MediaBundle called " + inputName + ".";
      break;
    }
  $("#MBCreateOutput").empty();
  $("#MBCreateOutput").show();
  document.getElementById("MBCreateOutput").innerHTML = text;
  $("#MBCreateOutput").fadeOut(5000);
}

// function mbIndex(name,type) {
//   switch (type) {
//     case "mediaBundle":
//       for (i=0;i<mediaBundles.length;i++){
//         if (mediaBundles[i].name===name){
//           return i;
//         }
//       }
//       break;
//     case "mediaObject":
//     for (i=0;i<mediaBundles.length;i++){
//       for (d=0;d<mediaBundles[i].objects.length;d++){
//       if (mediaBundles[i].objects[d]===name){
//         return [i,d];
//       }
//     }
//   }
//       break;
//     }
// }

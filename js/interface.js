//document.body.onload = addElement;

let mediaBundles = [];
let width = window.innerWidth;
let height = window.innerHeight;

//HTML edit editor interface template reference
const mbEdit = document.getElementById("mbModel"); // creates interface editor
const main = document.getElementById("main");


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
    this.index;
    //this.editing = false;
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

const editor = {
  editing: "none",
}


function changeTab (dest) {
    let n = document.getElementById("mbFactory").children;
    let m = document.getElementById("main").children;
    let s = document.getElementById("sandbox").children;

  switch (dest)  {
  case 'sandbox':
    document.getElementById("mbFactory").style.display === "none";
      for(i = 0; i < n.length ; i++) {
       n[i].style.display = "none";
     }
    document.getElementById("main").style.display === "none";

      for(i = 0; i < m.length ; i++) {
       m[i].style.display = "none";
      }
    document.getElementById("sandbox").style.display === "block";

      for(i = 0; i < s.length ; i++) {
       s[i].style.display = "block";
      }
    document.getElementById("sandboxTab").classList.add('active');
    document.getElementById("editorTab").classList.remove('active');
  break;
  case 'editor':
    document.getElementById("mbFactory").style.display === "block";

      for(i = 0; i < n.length ; i++) {
       n[i].style.display = "block";
      }
    document.getElementById("main").style.display === "block";

      for(i = 0; i < m.length ; i++) {
       m[i].style.display = "block";
     }

    document.getElementById("sandbox").style.display === "none";

      for(i = 0; i < s.length ; i++) {
       s[i].style.display = "none";
      }
    document.getElementById("sandboxTab").classList.remove('active');
    document.getElementById("editorTab").classList.add('active');
}
}

function editing(id){

//   if (editor.editing != "none"){
//     document.getElementById(editor.editing).classList.add('mb');
//     document.getElementById(editor.editing).classList.remove('mb-active');
//     editor.editing = id;
//     document.getElementById(editor.editing).classList.add('mb-active');
//     document.getElementById(editor.editing).classList.remove('mb');
//   } else {
//     editor.editing = id;
//     document.getElementById(editor.editing).classList.add('mb-active');
//     document.getElementById(editor.editing).classList.remove('mb');
// }
}




function updateIndex() {
  for (i=0;i<mediaBundles.length;i++){
  mediaBundles[i].index = i;
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

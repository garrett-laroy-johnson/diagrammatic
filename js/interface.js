//document.body.onload = addElement;

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

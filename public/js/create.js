
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


function createMB(name) {
  if (checkName(name, "mediaBundle")) {
      let input =  function() { prompt("There is already a MediaBundle called " + name + ". Please enter a new name.", phrase);
        return input;
    }
        .then(input => createMB(input));
  } else {
  }
  inputName = new MediaBundle(inputName, mediaBundles.length); //creates new JSON
  mediaBundles.push(inputName); //adds name of JSON to list of bundles
 return name;
}


function gotFile(file){
  for (let bund of mediaBundles){
   if (bund.rollover){
      bund.handleFile(file);

   }
  // bund.refreshObjList();
   }

   }

function deleteObj(mb, index) {

  if(mediaBundles[mb].objects[index].params.done){
    mediaBundles[mb].objects[index].params.done = false;
  mediaBundles[mb].objects[index].destroyGUI();
  mediaBundles[mb].objects.splice(index, 1);

  mediaBundles[mb].refreshObjList();
    mediaBundles[mb].showObjGUI(0);
}
}

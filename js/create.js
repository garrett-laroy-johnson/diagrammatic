
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
  let b = new MediaBundle(inputName, mediaBundles.length, (width / 2), (height / 2), 200, 200); //creates new JSON
  mediaBundles.push(b); //adds name of JSON to list of bundles
}

function createObject(file, name, path) {
  let type = "image";
  let b = new MediaObject(file, name, path, type);
//  this.objects.push(b);
}

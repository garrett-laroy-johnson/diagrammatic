//document.body.onload = addElement;

let mediaBundles = [];


class MediaBundle {
  constructor() {
    this.x;
    this.y;
    this.objects;
  }

  get name() {
    return this.name;
  }

  get name() {
    return this.name;
  }

  get position() {
    return (this.x, this.y);
  }

  get objects() {
    return this.objects;
  }

}



//function draw() {

//for (let i = 0; i < mediaBundles.length; i++) {
//  mediaBundles[i].write();

//  }
//}



function createMB() {

  let inputName = document.getElementById("newMBname").value; //grab the input from the form
  if (mediaBundles.includes(inputName) === true) //if media bundle already contains
  {
      $("#MBCreateOutput").empty();
      $("#MBCreateOutput").show();
      document.getElementById("MBCreateOutput").innerHTML = "There is already a MediaBundle called " + inputName + ", please find a new name or edit that one.";
      $("#MBCreateOutput").fadeOut(5000);

  }
  else { //if name is new go ahead and make that baddy
    mediaBundles.push(inputName); //adds name of JSON to list of bundles

    const test = new MediaBundle(); //creates new JSON

   //let newDiv = document.createElement("div"); // creates interface editor
    console.log(mediaBundles);

    $("#MBCreateOutput").empty();
    $("#MBCreateOutput").show();
    document.getElementById("MBCreateOutput").innerHTML = "You've created a MediaBundle called " + inputName;
    $("#MBCreateOutput").fadeOut(5000);
    console.log(newObj);

  }




}

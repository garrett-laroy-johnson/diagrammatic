let s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";


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


  updateName(name){

    document.getElementbyID(this.ui.rename).value = thisName;
    this.name = name;
    console.log("name is updated " + this.name);

  }



createObjUI(file,name,path){

  this.ui = {
    // set IDs for HTML DOM elements that need JS interaction

    trash: this.name + "_trash",
    header: this.name + "_header",
    gradient: this.name + "_gradient",
    tab: this.name + "_tab",
    rename: this.name + "_rename",
    renameLabel: this.name + "_renameLabel",
    renameButton: this.name + "_renameButton",
    objTabs: []

  };

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
}

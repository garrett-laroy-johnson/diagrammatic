let s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";


let MediaObject = class {
  constructor(file, name, path, type) {
    this.name = name;
    this.path = path;
    this.type = type;
    this.width;
    this.height;
    this.file = file;
    this.offset = [random(200) - 100, random(200) - 100];
    this.img = loadImage(path);
    this.scale = 1.0;
    this.gui_media = this.name + "_media";
    this.gui_mediaPane= this.name + "_mediaPane";
    this.gui_ctrlPane= this.name + "_ctrlPane";
    this.gui_trash= this.name + "_trash";
    this.gui_header= this.name + "_header";
    this.gui_gradient= this.name + "_gradient";
    this.gui_tab= this.name + "_tab";
    this.gui_objTabEditor= this.name + "_objTabEditor";
    this.gui_tabButt = this.name + "_tabButt";
    this.gui_scalar = this.name + "_scalar";
    this.gui_renameInput;
    this.gui_renameInputID= this.name + "_rename_input";
    this.gui_renameValue= this.name + "_rename_value";
    this.gui_renameLabel= this.name + "_renameLabel";
    this.gui_renameButton= this.name + "_renameButton";
    this.gui_objTabs= [];

  }


  updateVals(){

    // document.getElementbyID(this.ui.rename).value = thisName;
    // console.log("name is updated " + this.value());
     this.name = this.gui_renameInput.value();
    // document.getElementById(`${this.gui_tabButt}`).innerHTML = `${this.name}`;
     this.scale = this.gui_scalar.value();
  }



createObjUI(index){


    let mb = mediaBundles[index];


  //get mediabundle TabNav
    let t = document.getElementById(mb.ui.tab);
    // create reference for nav container
    let parentNav = document.getElementById(mb.ui.nav);
   // get template editor code.
    let tEdit = document.getElementById("objPane");
    let editParent = document.getElementById("myTabContent");

   //clone and create tabs
    let clone = t.cloneNode(true);
    clone.id = `${this.gui_tab}`;
    let editClone = tEdit.cloneNode(true);
    editClone.id = `${this.gui_objTabEditor}`;

    //link tab button to content
    let link = clone.querySelector("button");
    link.setAttribute("data-bs-target", `#${this.gui_objTabEditor}`);
    link.innerHTML = `${this.name}`;
    link.id= `${this.gui_tabButt}`;

//
    editClone.querySelector("div.mediaPane").id = this.gui_mediaPane;
    editClone.querySelector("div.ctrlPane").id = this.gui_ctrlPane;

    parentNav.appendChild(clone);
    editParent.appendChild(editClone);

// BELOW SHOULD BE p5 CREATE() functions

  if (this.type == "image") {
    this.gui_media = createImg(this.path, "image for " + this.name);
    this.gui_media.addClass("img-fluid");
    this.gui_media.addClass("img-thumbnail");
    this.gui_media.parent(this.gui_mediaPane);

}
    this.gui_renameLabel = createElement("label", "Object Name");
    this.gui_renameLabel.attribute("for", this.gui_renameInputID)
    this.gui_renameLabel.parent(this.gui_ctrlPane);

    this.gui_renameInput = createInput ('');
    this.gui_renameInput.id(this.gui_renameInputID);
    this.gui_renameInput.addClass("form-control");
    this.gui_renameInput.parent(this.gui_ctrlPane);

    this.gui_scalar = createSlider(0.1, 4, 1.0);
    this.gui_scalar.id(this.gui_scalarID);
        this.gui_scalar.parent(this.gui_ctrlPane);

}
}

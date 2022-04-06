let MediaObject = class {
  constructor(file, name, index)  {
    this.name = name;
    this.width;
    this.height;
    this.file = file;
    this.offset = [random(200) - 100, random(200) - 100];
    this.index = index;
    }
}

class ImageObject extends MediaObject {
  constructor(file, name, img, index, mbIndex) {
    super(file, name, index);
    this.name = name;
    this.index = index;
    this.mbIndex = mbIndex;
    this.width = img.width;
    this.height = img.height;
    this.file = file;

    this.params = {
     // image scale
      scale: 0.1,
      //offset
      offsetY : 0,
      offsetX : 0,
      done : false
    }
    this.img = img; // before it was loadImage(path);
    // this.url = URL.createObjectURL(this.file);

      this.destroyGUI = function(){
        mediaBundles[this.mbIndex].gui
        .removeControl("media object panel")
        .removeControl("rename")
        .removeControl("scale")
        .removeControl("offsetX")
        .removeControl("offsetY")
        // .removeControl("delete")
      //  .showControl("preview");
      }
      this.loaded = function (){
      console.log("image loaded");

      };
      this.buildGUI = function() {
        this.params.done = false;
        mediaBundles[this.mbIndex].gui
        .addHTML("media object panel", `<h2>${this.name} parameters</h2><button onclick="deleteObj(${this.mbIndex},${this.index})">delete media object</button>`)
        .bindRange("scale", 0.001, 1.0, this.params.scale, 0.001, this.params)
        // .bindText("rename",)
        .bindRange("offsetX", -200, 200, this.params.offsetX, 1, this.params)
        .bindRange("offsetY", -200, 200, this.params.offsetY, 1, this.params)
        // .addButton("delete", deleteObj(this.mbIndex,this.index));
      //  .addImage("preview", this.img, this.loaded())
       this.params.done = true;
        }
        }


  }



class VideoObject extends MediaObject {
  constructor(file, name, vid, index) {
    super(file, name);
    this.name = name;
    this.index = index;
    this.width = vid.width;
    this.height = vid.height;
    this.file = file;
    this.gui;
    this.params = {
     // image scale
      scale: 0.1,
      //offset
      offsetY : 0,
      offsetX : 0,
    }
    this.vid = vid; // before it was loadImage(path);
    this.buildGUI();
    }
    buildGUI() {

     this.gui =  QuickSettings.create(5, 5, `${this.name}_panel`)
      .bindRange("scale", 0.01, 2.0, 0.1, 0.01, this.params)
      .bindRange("offsetX", -200, 200, 0, 1, this.params)
      .bindRange("offsetY", -200, 200, 0, 1, this.params)
      .setKey("h")
      .collapse();
      }
  }

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
    }
    this.img = img; // before it was loadImage(path);
    // this.url = URL.createObjectURL(this.file);

      this.hideGUI = function(){
        mediaBundles[this.mbIndex].gui
        .hideControl("subpanel")
        .hideControl("scale")
        .hideControl("offsetX")
        .hideControl("offsetY")
    //    .hideControl("preview");

        console.log("hiding control");
      };
      this.showGUI = function(){
        mediaBundles[this.mbIndex].gui
        .showControl("subpanel")
        .showControl("scale")
        .showControl("offsetX")
        .showControl("offsetY")
      //  .showControl("preview");
      }
      this.loaded = function (){
      console.log("image loaded");
      this.hideGUI();
      };
      this.buildGUI = function() {
        mediaBundles[this.mbIndex].gui
        .addHTML("subpanel", `<h2>${this.name} parameters</h2>`)
        .bindRange("scale", 0.01, 2.0, 0.1, 0.01, this.params)
        .bindRange("offsetX", -200, 200, 0, 1, this.params)
        .bindRange("offsetY", -200, 200, 0, 1, this.params)
      //  .addImage("preview", this.img, this.loaded())
        }
       this.buildGUI();
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

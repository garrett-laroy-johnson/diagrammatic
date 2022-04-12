let MediaObject = class {
  constructor(file, name, index)  {
    this.name = name;
    this.width;
    this.height;
    this.file = file;
    this.index = index;
    }
}

class ImageObject extends MediaObject {
  constructor(file, name, img, index, mbIndex) {
    super(file, name, index);
    this.type = "image";
    this.name = name;
    this.index = index;
    this.mbIndex = mbIndex;

    this.file = file;

    this.params = {
      //offset
      offsetY : 0,
      offsetX : 0,

      scale: 0.1,

      foregroundColor: "#ffffff",
      backgroundColor: "#000000",

      textSize: 14,
      textFont: "monospace",

      bgBox: false,
      borderWeight: 8,
      boxWidth: 200,

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
    this.type = "video";
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
      .collapse();
      }
  }



  class TextObject extends MediaObject {
    constructor(file, name, text, index, mbIndex) {
      super(file, name, index);
      this.type= "text";
      this.name = name;
      this.index = index;
      this.mbIndex = mbIndex;
      this.width = 200;
      this.height = 200;
      this.file = file;

      this.params = {
       // image scale
        scale: 0.1,
        //offset
        offsetY : 0,
        offsetX : 0,
        txt : text,

        textColor: "#000000",
        panelColor: "#ffffff",

        textSize: 14,
        font: "monospace",

        backgroundPanel: false,
        borderWeight: 8,
        boxWidth: 200,
          done : false,
      }
    // before it was loadImage(path);
      // this.url = URL.createObjectURL(this.file);

        this.destroyGUI = function(){
          mediaBundles[this.mbIndex].gui
          .removeControl("media object panel")
          .removeControl("txt")
          .removeControl("backgroundPanel")
          .removeControl("panelColor")
          .removeControl("font")
          .removeControl("textSize")
          .removeControl("textColor")
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
          .bindTextArea("txt", this.params.txt, this.params)
          .bindBoolean("backgroundPanel", true, this.params)
          .bindColor("panelColor", "#000000", this.params)
          .bindDropDown("font", ["serif", "sans-serif", "monospace", "cursive", "fantasy"], this.params)
          .bindRange("textSize", 6, 200, 14, 1, this.params)
          .bindColor("textColor", "#000000", this.params)
          .bindRange("offsetX", -1, 1, this.params.offsetX, 0.001, this.params)
          .bindRange("offsetY", -1, 1, this.params.offsetY, 0.001, this.params)
          // .addButton("delete", deleteObj(this.mbIndex,this.index));
        //  .addImage("preview", this.img, this.loaded())
         this.params.done = true;
          }
          }


    }

let MediaObject = class {
  constructor(file, name)  {
    this.name = name;
    this.width;
    this.height;
    this.file = file;
    this.offset = [random(200) - 100, random(200) - 100];
    this.gui = createGui(`${this.name}`);
    this.params = {
       // image scale
        scale : 1.0,
        scaleMin : 0.1,
        scaleMax : 5,
        scaleStep: 0.1,

        //offset
        offsetY : int(random(200) - 100),
        offsetYMin : 0.0,
        offsetYMax: 1000.0,
        offsetYStep: 1.0,

        offsetX : int(random(200) - 100),
        offsetXMin : 0,
        offsetXMax: 1000,
        offsetXStep: 1.0,
    }
    this.buildGUI = function () {
      this.gui.addObject(this.params);
    }

  }
}

class ImageObject extends MediaObject {
  constructor(file, name, img) {
    super(file, name);
    this.name = name;
    this.width;
    this.height;
    this.file = file;
    this.gui;
    this.params = {
   // image scale
    scale: 100,
    //offset
    offsetY : int(random(200) - 100),
    offsetX : int(random(200) - 100),
    }
    this.img = img; // before it was loadImage(path);
    this.buildGUI();
    }
    buildGUI() {
     this.gui =  QuickSettings.create(5, 5, `${this.name}`)
      .bindRange("scale", 0, 200, 1, 1, this.params)
      .bindRange("offsetX",-200,200, 0, 1, this.params)
      .bindRange("offsetY",-200,200, 0, 1, this.params)

  }
  }

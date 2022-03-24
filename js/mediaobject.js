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

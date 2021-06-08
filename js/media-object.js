// Media bundle contains list of media objects
class MediaBundle {
  constructor (mediaObjects) {
    this._mediaObjects = [];
  }
  addMediaObject(newObj){
    this._mediaObjects.push(newObj);
  }
  removeMediaObject(objName){
    let index = this._mediaObjects.indexOf(objName);
  if (index > -1) {
    this._mediaObjects.splice(index, 1);
  }
  get MediaObjects()
  {return this.mediaObjects;
  }
  }
}

// parent media object

class MediaObject {
  constructor(name, path){
    this._name = name;
    this._filepath = path;
    this._filetype = "";
  }
  get name() {
    return this._name;
  }
  }

// child media object

class Video extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    super(filetype);
    this._dimensions = [];
    this._duration = [];
  }
}

class Image extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    super(filetype);
    this._dimensions = [];
  }
}

class Audio extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    super(filetype);
    this._duration = [];
  }
}

class Text extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    super(filetype);
    this._text = "";
    this._font = "";
    this._fontSize = "";
  }
}

class BibTeX extends MediaObject {
  constructor(name) {
    super(name);
    super(path);
    super(filetype);
    this._text = "";
    this._font = "";
    this._fontSize = "";
  }
}

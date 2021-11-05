let mediaBundles = [];
let input, button;

class MediaBundle {
  constructor(element, x, y) {

    this.element = element;
    this.x = x;
    this.y = y;
    this.objects = [];
  }

  write() {
    let title = createElement('h2', this.element);
    title.position(this.x, this.y);
  }

  newObj() {
    let obj =  window.prompt('what is the name of this new media object?');
    this.objects.push(obj);
  }
}

function setup() {

input = createInput();
input.position(20, 65);

button = createButton('submit');
button.position(input.x + input.width, 65);
button.mousePressed(createMB);
}

function draw() {

  for (let i = 0; i < mediaBundles.length; i++) {
  mediaBundles[i].write();

  }
}

function createMB() {

  let name = new MediaBundle(input.value();, 50, 50);

   console.log('asking for name of new MB!');

// dialog("Name your new media bundle")
 console.log('before push ' + mediaBundles);
  mediaBundles.push(name);
  console.log('afterpush ' + mediaBundles);

}

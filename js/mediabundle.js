class mediaBundle {
  constructor(_x, _y, _s, _i){
    this.x = _x;
    this.y = _y;
    this.size = _s;
    this.objects = [tree0, tree1, tree2];
    this.index = _i;
  }

  show() {
    image(this.objects[this.index], this.x, this.y, this.size, this.size);
  }
}

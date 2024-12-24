class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Enter a Valid width");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Enter a Valid height");
    }
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._height * this._width;
  }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.width, rectangle.height);




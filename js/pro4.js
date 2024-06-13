let pr4 = document.querySelector(".pr4");
let pr42 = document.querySelector(".pr42");
class Shape {
    constructor(width, height, radius) {
      this.width = width;
      this.height = height;
    }
     rArea() {
        pr42.innerHTML = "ractangleArea : " + this.width * this.height
    }
  
     cArea(radius) {
    pr4.innerHTML = "circleArea : " + 3.14 * (radius * radius)
    }
  }
  
let ra = new Shape(8, 20);
ra.rArea();
ra.cArea(4);

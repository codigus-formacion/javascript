class Shape {

    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }

    move(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return 'Shape(' + this.id + ')'
    }
}

class Rectangle extends Shape {

    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }

    toString() {
        return "Rectangle > " + super.toString()
    }

    static defaultRectangle() {
        return new Rectangle("default", 0, 0, 100, 100)
    }
}

let rectA = new Rectangle('A', 3, 5, 10, 20);

console.log("rectA: " + rectA);
console.log("rectA.height: " + rectA.height);
console.log("rectA.width: " + rectA.width);
console.log("rectA.x: " + rectA.x);
console.log("rectA.y: " + rectA.y);

let defRectangle = Rectangle.defaultRectangle();

console.log("Default rectangle: "+defRectangle);
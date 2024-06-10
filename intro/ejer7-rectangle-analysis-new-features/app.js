class Shape {

    constructor(color) {
        if (this.constructor == Shape) {
            console.error("Can't instantiate abstract class Shape")
            return;
        }
        this.color = color;
    }

    area() {
        console.error('Not implemented');
    }

    perimeter() {
        console.error('Not implemented');
    }

    ratioAreaPerimetro() {
        return this.area() / this.perimeter();
    }

    toString() {
        return 'color: ' + this.color + ' area:' + this.area() + ' perimeter:' + this.perimeter();
    }
}

class Rectangle extends Shape {

    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }

    toString() {
        return 'Rectangle: ' + super.toString();
    }
}

class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return 'Circle: ' + super.toString();
    }
}

class ShapeAnalyzer {

    constructor(shapes) {
        this.shapes = shapes;
    }

    sumAreas() {

        let areaSum = 0;

        for (let i = 0; i < this.shapes.length; i++) {
            let rect = this.shapes[i];
            areaSum += rect.area();
        }

        return areaSum;
    }

    sumPerimeters() {

        let perimeterSum = 0;

        for (let i = 0; i < this.shapes.length; i++) {
            let rect = this.shapes[i];
            perimeterSum += rect.perimeter();
        }

        return perimeterSum;
    }

    avgArea() {
        return this.sumAreas() / this.shapes.length;
    }

    avgPerimeter() {
        return this.sumPerimeters() / this.shapes.length;
    }

    avgAreaPerimeterRatio() {
        return this.avgArea() / this.avgPerimeter();
    }
}

//------------------------------------

let rects = [
    new Rectangle('verde', 5, 6),
    new Circle('rojo', 2),
    new Rectangle('amarillo', 5, 5),
    new Circle('negro', 10)
];

let af = new ShapeAnalyzer(rects);

console.log('Average perimeter: ', af.avgPerimeter());
console.log('Average area: ', af.avgArea());
console.log('Average area/perimeter ratio: ', af.avgAreaPerimeterRatio());

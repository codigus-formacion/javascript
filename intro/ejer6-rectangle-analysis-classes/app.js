class Rectangle {

    constructor(color, height, width) {
        this.color = color;
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width
    }

    perimeter() {
        return this.height * 2 + this.width * 2
    }

    toString() {
        return 'area:' + this.area() + ' perimeter:' + this.perimeter();
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
}

//------------------------------------

let rects = [
    new Rectangle('green', 5, 6),
    new Rectangle('red', 2, 3),
    new Rectangle('yellow', 5, 5),
    new Rectangle('black', 10, 5)
];

let af = new ShapeAnalyzer(rects);

console.log('Average perimeter: ', af.avgPerimeter());
console.log('Average area: ', af.avgArea());

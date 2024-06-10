function newRect(color, height, width) {

    let rect = {

        color: color,
        height: height,
        width: width,

        area: function () {
            return this.height * this.width
        },
        
        perimeter: function () {
            return this.height * 2 + this.width * 2
        },

        toString: function(){
            return 'area:'+this.area()+' perimeter:'+this.perimeter();
        }
    }

    return rect;
}

let rects = [ 
    newRect('green', 5, 6),
    newRect('red', 2, 3),
    newRect('yellow', 5, 5),
    newRect('black', 10, 5)
];

let perimeterSum = 0;
let areaSum = 0;

for(let i=0; i<rects.length; i++){
    let rect = rects[i];
    console.log("rects["+i+"]="+rect);
    console.log(rect);
    perimeterSum += rect.perimeter();
    areaSum += rect.area();
}

let perimeterAvg = perimeterSum / rects.length;
let areaAvg = areaSum / rects.length;

console.log('Average perimeter: ', perimeterAvg);
console.log('Average area: ', areaMedia);

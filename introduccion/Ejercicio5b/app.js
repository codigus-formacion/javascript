function nuevoRect(color, alto, ancho) {

    let rect = {

        color: color,
        alto: alto,
        ancho: ancho,

        area: function () {
            return this.alto * this.ancho
        },
        
        perimetro: function () {
            return this.alto * 2 + this.ancho * 2
        },

        toString: function(){
            return 'area:'+this.area()+' perimetro:'+this.perimetro();
        }
    }

    return rect;
}

let rects = [ 
    nuevoRect('verde', 5, 6), 
    nuevoRect('rojo', 2, 3),
    nuevoRect('amarillo', 5, 5),
    nuevoRect('negro', 10, 5)
];

let sumPerimetros = 0;
let sumAreas = 0;

for(let i=0; i<rects.length; i++){
    let rect = rects[i];
    console.log("rects["+i+"]="+rect);
    console.log(rect);
    sumPerimetros += rect.perimetro();
    sumAreas += rect.area();
}

let perimetroMedio = sumPerimetros / rects.length;
let areaMedia = sumAreas / rects.length;

console.log('Perimetro medio: ',perimetroMedio);
console.log('Area media: ',areaMedia);

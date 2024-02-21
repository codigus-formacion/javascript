let rect = {

    color: 'verde',
    alto: 5,
    ancho: 6,

    area: function () {
        return this.alto * this.ancho
    },

    perimetro: function () {
        return this.alto * 2 + this.ancho * 2
    }
}

console.log('Área: ' + rect.area());
console.log('Perímetro: ' + rect.perimetro());
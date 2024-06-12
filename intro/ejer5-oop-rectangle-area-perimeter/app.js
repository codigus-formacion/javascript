let rect = {

    color: 'green',
    height: 5,
    width: 6,

    area: function () {
        return this.height * this.width
    },

    perimeter: function () {
        return this.height * 2 + this.width * 2
    }
}

console.log('Area: ' + rect.area());
console.log('Perimeter: ' + rect.perimeter());
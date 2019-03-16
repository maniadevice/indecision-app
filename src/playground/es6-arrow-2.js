const user = {
    name: 'Anees',
    cities: ['Mangalore', 'Bangalore', 'Leicester'],
    printPlacesLived(){
        return this.cities.map( (city) => this.name + ' has lived in ' + city);
    }
};

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
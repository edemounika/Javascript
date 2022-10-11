let cities = [
    {name: 'Los Angeles', population: 379},
    {name: 'New York', population: 817},
    {name: 'Chicago', population: 269},
    {name: 'Houston', population: 2099},
    {name: 'Philadelphia', population: 1520}
];
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);

//reduce method


let numbers = [1, 2, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);
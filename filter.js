//Example 1

let example1Output = document.getElementById('example1-output');
let example1Input = [10, 20, 30, 40, 50, 60, 70];

function filterNumbers(number) {
    return number > 40;
}

example1Output.textContent = example1Input.filter((number) => filterNumbers(number)).join(', ');


//Example 2

let example2Output = document.getElementById('example2-output');
let animals = [
    {name: 'antelopes', biome: 'mountains'},
    {name: 'mountain lions', biome: 'mountains'},
    {name: 'big horn sheep', biome: 'mountains'},
    {name: 'catfish', biome: 'wetlands'}
];

function choseBiome(animal) {
    return animal.biome == 'mountains';
}

function extractValues(animal) {
    return animal.name;
}

// Map is used in this example. Look at the Map page to learn about the map function.
example2Output.textContent = animals.filter((animal) => choseBiome(animal)).map((animal) => extractValues(animal)).join(', ');
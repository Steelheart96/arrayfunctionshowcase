//Example 1

let example1Output = document.getElementById('example1-output');
let example1Input = [1, 2, 3, 4, 5];

function addArray(accumulator, newValue) {
    return accumulator + newValue;
}

example1Output.textContent = example1Input.reduce((accumulator, newValue) => addArray(accumulator, newValue));


//Example 2

let example2Output = document.getElementById('example2-output');
let example2Input = ["Let's", "go", "places", "someday!"]

function combineWords(wordSum, newWord) {
    return `${wordSum} ${newWord}`;
}

example2Output.textContent = example2Input.reduce((wordSum, newWord) => combineWords(wordSum, newWord));


//Example 3
let example3Output = document.getElementById('example3-output');
let example3Input = [
    {name: 'antelopes', biome: 'mountains'},
    {name: 'catfish', biome: 'mountains'},
    {name: 'mountain lions', biome: 'wetlands'},
    {name: 'big horn sheep', biome: 'mountains'}
];

function redoAnimals(accumulator, object) {
    accumulator[object.name] = {biome: `${object.biome}`};
    return accumulator;
}

function extractValues(animal) {
    let values = Object.entries(animal[1]);
    return`${animal[0]}: {${values[0][0]}: "${values[0][1]}"}`;
}

let newOutput = example3Input.reduce((accumulator, object) => redoAnimals(accumulator, object), {});

// Map is used in this example. Look at the Map page to learn about the map function.
example3Output.innerHTML = `<code>{${Object.entries(newOutput).map((animal) => extractValues(animal)).join(',</br>')}}</code>`;
//Example 1

let example1Output = document.getElementById('example1-output');
let example1Input = [1, 2, 3, 4, 5, 6, 7];

function mulitplyBy2(number) {
    return number * 2;
}

example1Output.textContent = example1Input.map(function (listItem) {return mulitplyBy2(listItem)}).join(', ');


//Example 2

let example2Output = document.getElementById('example2-output');
let example2Input = "something has been passed here.";

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

example2Output.textContent = example2Input.split(' ').map((word) => capitalizeWord(word)).join(' ');


//Example 3

let example3Output = document.getElementById('example3-output');
let example3Input = ["James", "Alen", "Alicia", "Alice"];

function makeList(name) {
    return `<li>${name}</li>`;
}

example3Output.innerHTML = `<ul>${example3Input.map((item) => makeList(item)).join('')}</ul>`;
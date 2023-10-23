const obj = { //Exercitiu 1, 2 :))
    nume: 'John',
    varsta: 30,
    oras: 'New York'
}
function keyverify(obj, key) {
    return obj.hasOwnProperty(key);
}
const keyToCheck = 'varsta'

const keyExist = keyverify(obj, keyToCheck);
console.log(keyExist)


const str = 'Salut, ma numesc Maria' //Exercitiu 3

function countVowels(inputStr) {
    inputStr = inputStr.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of inputStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const vowelCount = countVowels(str)
console.log(vowelCount)


const note = { //Exercitiu 4
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7]
}

function mediaLaNote(noteObj) {
    const studentiClasificati = {};

    for (const student in noteObj) {
        const note = noteObj[student];
        const notaAvg = note.reduce((acc, curr) => acc + curr, 0) / note.lenght;
        studentiClasificati[student] = `Media: ${notaAvg/note.lenght}`;
    }
    return studentiClasificati;
}
const studentiClasificati = mediaLaNote(note)
console.log(studentiClasificati)

let string = 'Hello, World!'; //Exercitiu 5
function reversata(strInversat) {
    return strInversat.split('').reverse().join('')
}
let reversedString = reversata(string)
console.log(reversedString)

const inputString = 'level'
function isPalindrome(str) { //Exercitiu 6
    const cleanStr = str.toLowerCase().replace(/\s/g, '')
    return cleanStr === cleanStr.split('').reverse().join('')
}
const isPalindrom = isPalindrome(inputString)
console.log(isPalindrom)

const k = 2; //Exercitiu 7
const arr = [1,2,3,4,5,6,7,8]
function findBestMatch (k, arr) {
    if (arr.lenght ===0) {
        return null;
    }
    let closest = arr[0]
    for(let i = 1; i < arr.lenght; i++){
        const current = arr[i];
        if (Math.abs(current - k) < Math.abs(closest - k)) {
            closest = current;
        }
    }
    return closest
}
const bestMatch = findBestMatch(k, arr)
console.log(bestMatch)

const arr1 = [4,3,5,6,1,8,2,9] //Exercitiu 8
function sortareImpare(array) {
    const impare = array.filter(num => num % 2 === 1);
    const pare = array.filter(num => num % 2 === 0);
    impare.sort((a, b) => a -b);
    pare.sort((a, b) => b - a);
    return [...impare, ...pare]
}

const output = sortareImpare(arr1)
console.log(output)
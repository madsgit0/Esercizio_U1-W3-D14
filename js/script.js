
// Ad una stringa di partenza, dovrai applicare i metodi per caratteri maiuscoli e minuscoli, suddividere nei suoi elementi e selezionarne due. I due selezionati saranno concatenati in un'unica stringa

let car = "Scegli un'auto per il viaggio"
let maiuscolo= car.toUpperCase();
console.log(maiuscolo)

let minuscolo= car.toLowerCase();
console.log(minuscolo)

let divide= car.split(' ')
console.log(divide)

console.log(divide[1]);
console.log(divide[4]);

console.log(divide[1], divide[4]);

let nuovaStringa = car.concat(" durante il weekend");

console.log(nuovaStringa);

// Crea un array di persone

let persone = [ 
    "marco", 
    "antonio", 
    "marco", 
];

console.log(persone);

// Leggi il terzo elemento

console.log(persone[2])

// Passa all'array un valore tramite una variabile, leggi la lunghezza dell'array

let nuovaPersona = "franco";
persone.push(nuovaPersona)

console.log(persone)
console.log(persone.length)

// Crea una funzione all'interno della quale utilizzerei i valori numerici tratti da un array

arrayNum = [2, 8, 40, 24, 98, 67, 1, 9];
function add(){
    let result = arrayNum [4] + arrayNum [6]
    return result;
};
console.log(add());

// Usa i metodi push/pop e shift/unshift su un array

let carBrand = [
    "Tesla",
    "Ferrari",
    "Mercedes",
];

console.log(carBrand);


let sft = carBrand.shift();
console.log(sft);

let unsft = carBrand.unshift();
console.log(unsft);
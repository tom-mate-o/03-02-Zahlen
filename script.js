
//-------------------finde die höchste Zahl-----------------//

const numberChain = [23, 8, 15, 4, 42, 16]; // Definiere ein Array namens "numberChain"

let highestNumber = 0; // Definiere eine Variable "highestNumber" mit einem Startwert von 0

for (let number of numberChain) { // For-of-Schleife durchläuft das Array "numberChain". 
    // Hier wird für jede Zahl im Array die Variable "number" erstellt und der Code innerhalb der Schleife ausgeführt.

  if (number > highestNumber) { // Wenn der aktuelle Wert von "number" größer ist als der Wert von "highestNumber"...
    highestNumber = number; // ...wird der Wert von "highestNumber" auf den Wert von "number" aktualisiert.
                            //...das wird solange gemacht bis die letzte Zahl im Array erreicht wurde.
}
  }

console.log(highestNumber); // Gib die höchste Zahl aus.



//-------------------in einer Funktion verpackt -----------------//

function findHighestNumber(array){ //funktion um höchste nummer in einem array zu finden

    let highestNumber = 0;

    for (let number of array){ //array ist Platzhalter

        if (number>highestNumber){
            highestNumber=number;
        }
    }
    console.log(highestNumber); // Gib die höchste Zahl aus.
    return(highestNumber); // Übergibt die höchste Zahl.
}

const highestNumberInArray = findHighestNumber(numberChain); //Führt die obrige Funktion mit dem Array numberChain aus. Ohne dem passier gor nix.


//-------------------sort() groß nach klein -----------------//

const numberChainToSort = [15, 8, 23, 16, 42, 4];
let sortetNumberChain = numberChainToSort.sort((b,a) => a-b);
console.log(sortetNumberChain);


//-------------------gerade Zahlen filtern -----------------//

const numberChainToFilter = [4, 8, 15, 16, 23, 42];

const filterEvenNumbers = numberChainToFilter.filter(number => {
    return number % 2 === 0;
});

console.log(filterEvenNumbers);
let calloriesByElf = input.split("\n\n")
let higherElf = 0
calloriesByElf.forEach(updateIfHighest) // forEach est une fonction.
function updateIfHighest(calByElves) {
    let callories = calByElves.split("\n")
    let sumOfCallories = getSum(callories); // Je prends un tableau de callories et je retourne la somme des callories => je stock dans sumOfCallories.
    compareElf(sumOfCallories)
}

function getSum(numberArray){
    let sum = 0;
    for (let number of numberArray){
        sum = sum + Number(number);
    }
    return sum;
}
function compareElf(elfCallories){
    if (elfCallories > higherElf){
        higherElf = elfCallories
    }
    
}
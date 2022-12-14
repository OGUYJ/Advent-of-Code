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
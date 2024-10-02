function isNumber(character) {
    if(isNaN(character)) {
        return false;
    } else {
        return true;
    }
}

function isWhiteSpaceCharacter(character) {
    if(character.trim().length === 0) return true;
    return false;
}

function fetchNumbers(str) {
    const positiveNumbers = str.match(/\d+/g);
    return positiveNumbers || [];
}

function fetchNegativeNumbers(str) {
    const negativeNumbers = str.match(/-\d+/g);
    return negativeNumbers || [];
}

function add(numbers) {
    let result = 0;

    if(!numbers.length) return result;

    const fetchedNegativeNumbers = fetchNegativeNumbers(numbers);
    if(fetchedNegativeNumbers.length) {
        throw new Error(`negative numbers not allowed ${fetchedNegativeNumbers.join(',')}`);
    }

    const fetchedPositiveNumbers = fetchNumbers(numbers);
    if(!fetchedPositiveNumbers.length) return result;
    
    result = fetchedPositiveNumbers.reduce((acc, fetchedPositiveNumber) => {
        const parsedNumber = parseInt(fetchedPositiveNumber);
        if(parsedNumber <= 1000)
        acc = acc + parsedNumber;
        return acc;
    },0);

    return result;
}

export {isNumber, fetchNumbers, isWhiteSpaceCharacter, add}
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
    const characterArray = Array.from(str);
    const numbers = characterArray.filter(character => isNumber(character) && !isWhiteSpaceCharacter(character));
    return numbers;
}

export {isNumber, fetchNumbers, isWhiteSpaceCharacter}
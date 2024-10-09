/**
 * 
 * @param {The word which is given as input and is expected to be guessed} originalWord 
 * @param {Letters which are guessed by the user already} guessedLetters 
 * Ex: originalWord: HUMBLE
 * gussedLetters : ['H', 'U', 'L']
 * 
 * return --> "[H U _ _ L _]"
 */

export function getMaskedLetterString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const guessedLettersSet = new Set(guessedLetters);

    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLettersSet.has(char)) {
            return char;
        }
        else {
            return "_";
        }
    });
    return result.join(' ');
}
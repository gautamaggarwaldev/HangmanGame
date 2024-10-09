import { getMaskedLetterString } from "./MaskingUtility";

function MaskedText({text, guessedLetters}) {
    const maskedString = getMaskedLetterString(text, guessedLetters);

    return (
        <>
            {maskedString.map((letter,index)=> {
                return (
                    <span key={index} className="mx-2">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default MaskedText;
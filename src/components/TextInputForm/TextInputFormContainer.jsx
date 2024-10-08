import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submitted"); 
    }
    
    function handleTextInputChange(event) {
        console.log("text input change");
        console.log(event.target.value);
    }

    function handleShowHideClick() {
        console.log("show/hide button click")
        if(inputType === "password") setInputType("text");
        else setInputType("password");
        console.log(inputType);
    }
    
    return (
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    );
}


export default TextInputFormContainer;
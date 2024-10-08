import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that return a navigate function

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submitted", value); 
        if(value) {
            //if we have something in a value then we have to navigate in play page
             navigate("/play")
             
            {/*setTimeout(()=> {
                navigate("/play")
            },5000)*/}
        }
    }
    
    function handleTextInputChange(event) {
        console.log("text input change");
        console.log(event.target.value);
        setValue(event.target.value);
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
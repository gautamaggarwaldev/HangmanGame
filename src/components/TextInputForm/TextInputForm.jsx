import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label={"enter a word or phrase"}
                    placeholder={"enter a word here ..."}
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    text={inputType==="password"?"Show":"Hide"}
                    styleType={"warning"}
                    onChangeHandler={handleTextInputChange}
                    onClickHandler={handleShowHideClick}
                />
            </div>
            <div>
                <Button
                    type={"submit"}
                    text={"submit"}
                    styleType={"primary"}
                />
            </div>
        </form>
    );
};

export default TextInputForm;
import getButtonStyle from './getButtonStyle'; 
function Button({text, onClickHandler, styleType="primary", type="button"}) {

    console.log(text);
    
    return (
        <button
            type={type}
            onClick={onClickHandler}
            // style={{'backgroundColor': 'black', 'color': 'white'}}
            className={`mr-6 mt-4 ${getButtonStyle(styleType)} px-4 py-2 border-[0.5px] border-slate-700`}
        >
            {text}
        </button>
    )

    
}

export default Button;
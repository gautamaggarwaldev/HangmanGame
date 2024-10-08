function getButtonStyle(styleType) {
    if(styleType === "primary") return "bg-blue-400";
    else if(styleType === "secondary") return "bg-gray-600";
    else if(styleType === "error") return "bg-red-600";
    else if(styleType === "warning") return "bg-yellow-400";
    else if(styleType === "success") return "bg-green-500";
    else if(styleType === "submit") return "bg-rose-200";
}

export default getButtonStyle;
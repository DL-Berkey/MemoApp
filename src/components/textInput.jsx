import React, { useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

function TextInput() {
    const [text, setText] = useState(""); //이거 삭제하고 다른걸로 만들어야함
    const [textInputSize, setTextInputSize] = useState("35");


    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            setTextInputSize(parseInt(textInputSize) + 35);
        }
    }

    return(
        <form id="textInputForm">
            <textarea id="textInput" placeholder="언제나 간편하게 작성하세요." value={ text } onChange={ (e) => setText(e.target.value) } onKeyDown={ handleKeyPress } style={{ height: textInputSize + "px" }}></textarea>
            <button id="expandButton"><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
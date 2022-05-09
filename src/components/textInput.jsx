import React, { useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

function TextInput() {
    const [text, setText] = useState("");
    console.log(text);
    return(
        <form id="textInputForm">
            <textarea id="textInput" placeholder="언제나 간편하게 작성하세요." value={ text } onChange={ (e) => setText(e.target.value) }></textarea>
            <button id="expandButton"><AspectRatioIcon color="primary" sx={{ fontSize: 40 }} /></button>
            <button id="saveButton"><SaveIcon color="primary" sx={{ fontSize: 40 }} /></button>
        </form>
    );
}

export default TextInput;
import React, { useCallback, useRef, useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

function TextInput() {
    const [text, setText] = useState("");
    const [textInputSize, setTextInputSize] = useState("35");

    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        textRef.current.style.height = textRef.current.scrollHeight + "px"
    }, []);

    return (
        <form id="textInputForm">
            <textarea id="textInput" placeholder="언제나 간편하게 작성하세요." cols="17" ref={ textRef } onInput={ handleResizeHeight } style={{ height: textInputSize + "px" }}></textarea>
            <button id="expandButton"><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
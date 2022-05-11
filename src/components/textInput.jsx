import React, { useCallback, useRef, useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

function TextInput() {
    const [text, setText] = useState("");
    const [textInputSize, setTextInputSize] = useState(["14", "35"]); //[width, height]
    const [expandBoolean, setExpandBoolean] = useState(false);

    const textInputStyle = {
        width: textInputSize[0] + "rem",
        height: textInputSize[1] + "px",
        transition: "0.5s",
    };

    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        textRef.current.style.height = textRef.current.scrollHeight + "px"
    }, []);

    const expand = function (event) {
        setTextInputSize([24,100])
    }

    return (
        <form id="textInputForm">
            <textarea id="textInput" placeholder="언제나 간편하게 작성하세요." ref={ textRef } onInput={ handleResizeHeight } style={ textInputStyle }></textarea>
            <button type="button" id="expandButton" onClick={ expand }><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
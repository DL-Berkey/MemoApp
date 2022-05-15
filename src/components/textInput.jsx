import React, { useEffect, useRef, useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

const countChar = function(text, char) {
    let count = [...text].filter((item) => item === char).length + 1;

    return count;
}

const resizeByText = function(text, scale) {
    let value = ""

    if(scale === "up") {
        console.log("up")
        value = text + "\n";
        console.log([...text])
        //+ "\n"
    }

    if(scale === "down" && text[text.length - 1] === "\n") {
        console.log("down")
        value = [...text].splice(0, text.length - 1).join("");

    }
    const enterCount = countChar(value, "\n") * 35 || 35;
    console.log()
    setSize([size[0], enterCount]);
    console.log(value);
    return value;
}

const handleInputEvent = function(event) {
    const key = event.key;     
    let text = event.target.value;

    if (text.length !== 0 && text.length % 17 === 0 && text[text.length - 1] !== "\n" && key === "") {
        resizeByText(text, "up");
    }

    if (key === "Enter") {
        text = resizeByText(text, "up");
    }

    if(key === "Backspace") {
        text = resizeByText(text, "down");
    }

    textInputRef.current.value = text;
    console.log([...text]);
}

function TextInput() {
    const [size, setSize] = useState(["14", "35"]); //[width, height]
    const textInputRef = useRef();
    const style = {
        width: size[0] + "rem",
        height: size[1] + "px",
    }

    return (
        <form id="textInputForm">
            <textarea
                id="textInput"
                placeholder="언제나 간편하게 작성하세요."
                ref={ textInputRef }
                style={ style }
                // value={ text }
                onKeyDown={ handleInputEvent }
            >
            </textarea>
            <button type="button" id="expandButton" ><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
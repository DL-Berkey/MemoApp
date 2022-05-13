import React, { useEffect, useRef, useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

function TextInput() {
    const [size, setSize] = useState(["14", "35"]); //[width, height]
    const style = {
        width: size[0] + "rem",
        height: size[1] + "px",
    }

    const countChar = function(text, char) {
        let count = [...text].filter((item) => item === char).length

        if(count === 1) {
            count = 2;
        }
        return count;
    }

    const resizeByText = function (text, scale) {
        if(scale === "up") {
            text = [...text, "\n"].join("")
        }

        if(scale === "down" && text[text.length - 1] === "\n") {
            text = [...text].splice(0, text.length - 1).join("");

        }
        console.log([...text]);
        const enterCount = countChar(text, "\n") * 35;
        setSize([size[0], enterCount]);
    }

    const handleResize = function (event) {
        let text = event.target.value;

        if (text.length % 18 === 0 && text[text.length - 1] !== "\n") {
            resizeByText(text, "up");
        }
    }

    const handleKeyInput = function (event) {
        const key = event.key;
        let text = event.target.value;
        if (key === "Enter") {
            resizeByText(text, "up");
        }

        if(key === "Backspace") {
            resizeByText(text, "down")
        }
    }

    return (
        <form id="textInputForm">
            <textarea
                id="textInput"
                placeholder="언제나 간편하게 작성하세요."
                cols="3"
                style={ style }
                onChange={ handleResize }
                onKeyDown={ handleKeyInput }
            >
            </textarea>
            <button type="button" id="expandButton" ><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
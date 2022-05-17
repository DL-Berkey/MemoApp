import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

const countChar = function (text, char) {
    console.log(text)
    return text.split("").filter((item) => item === char).length;
}

//size width 14 rem, height 35px
function TextInput() {
    const [text, setText] = useState();
    const [style, setStyle] = useState({
        width: 14,
        height: 35,
    });
    const InputRef = useRef();

    useEffect(() => {
        InputRef.current.focus();
    }, []);

    useEffect(() => {
        InputRef.current.style.width = style.width + "rem"
        InputRef.current.style.height = style.height + "px"
    }, [style]);

    const handleChangeEvent = (event) => {
        let value = event.target.value;
        setText(() => event.target.value);

        // if(text === "") {
        //     console.log("니가 왜!!!")
        // }
        console.log(countChar(event.target.value, "\n"))
    }

    return (
        <form id="textInputForm">
            <textarea
                id="textInput"
                placeholder="언제나 간편하게 작성하세요."
                value={text}
                ref={InputRef}
                onChange={handleChangeEvent}
            >
            </textarea>
            <button type="button" id="expandButton" ><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
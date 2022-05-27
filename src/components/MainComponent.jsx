import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import "./mainComponent.css"
import SaveButton from './buttons/SaveButton';
import ExpandButton from './buttons/ExpandButton';
import ListButton from './buttons/ListButton';

const countChar = function (text, char) {
    return text.split("").filter((item) => item === char).length;
}

//size width 14 rem, height 35px
function MainComponent() {
    const [text, setText] = useState();
    const [style, setStyle] = useState({
        width: 14,
        height: 35,
    });
    const [styleStack, setStyleStack] = useState([style]);
    const InputRef = useRef();
    const toggleExpand = useRef(false)

    useEffect(() => {
        InputRef.current.focus();
    }, []);

    useEffect(() => {
        InputRef.current.style.width = style.width + "rem"
        InputRef.current.style.height = style.height + "px"
    }, [style]);

    // const resizer = useCallback(function (size) {
    //     let returnValue = null;

    //     if (styleStack.length === 2) {
    //         returnValue = styleStack[1];
    //         setStyleStack([styleStack[0]]);
    //     }

    //     setStyleStack([styleStack[0], setValue]);
    //     return returnValue;
    // }, []);

    // input event 관리
    const handleResizeEvent = (event) => {
        let value = event.target.value;

        // 17글자 이상되면 알아서 줄바꿈해주는 기능은 나중에 구현
        // if(value.length > 1 && value.length % 17 === 0 && text[text.length - 1] !== "\n") {
        //     const regExp = /[^ㄱ-ㅎㅏ-ㅣ]/

        //     if (regExp.test(value)) {
        //         console.log("done")
        //         console.log(value)
        //         value += "\n";
        //     }
        // }

        // if (countChar(value, "\n") !== 0) {
        //     resizer({
        //         width: style.width,
        //         height: (countChar(value, "\n") + 1) * 35,
        //     })
        // } else {
        //     setStyle(styleStack[0]);
        // }
    }

    return (
        <form id="textInputForm">
            <textarea
                id="textInput"
                placeholder="언제나 간편하게 작성하세요."
                value={text}
                ref={InputRef}
                onChange={handleResizeEvent}
                maxLength={17}
            >
            </textarea>
            <SaveButton />
            <ExpandButton />
            <ListButton />
        </form>
    );
}

export default MainComponent;
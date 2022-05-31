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
    const sizeStack = useRef([{
        width: 14,
        height: 35,
    }]);
    const inputRef = useRef();
    const toggleExpand = useRef(false)

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        let width = 0;
        let height = 0;
        console.log("hi3")
        if (sizeStack.current.length === 1){
            width = sizeStack.current[0].width + "rem";
            height = sizeStack.current[0].height + "px";
        } else {
            console.log("hi2")
            width = sizeStack.current[sizeStack.length - 1].width + "rem";
            height = sizeStack.current[sizeStack.length - 1].height + "px";
        }
        inputRef.current.style.width = width;
        inputRef.current.style.height = height;
    }, [sizeStack]);

    const handleExpand = function(event) {
            sizeStack.current.push({
                width: 100,
                height: 100,
            });
            event.preventDefault();
        };
    
    return (
        <form id="textInputForm">
            <textarea
                id="textInput"
                placeholder="언제나 간편하게 작성하세요."
                ref={inputRef}
                maxLength={17}
            >
            </textarea>
            <SaveButton />
            <ExpandButton expand={ handleExpand } />
            <ListButton />
        </form>
    );
}

export default MainComponent;
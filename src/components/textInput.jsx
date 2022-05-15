import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import "./textInput.css"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

const reducer = function(state, action) {
    console.log(state, action);
    return state;
};

//size width 14 rem, height 35px
function TextInput() {
    return (
        <form id="textInputForm">
            <textarea
                id="textInput"
                placeholder="언제나 간편하게 작성하세요."
            >
            </textarea>
            <button type="button" id="expandButton" ><AspectRatioIcon color="primary" /></button>
            <button id="saveButton"><SaveIcon color="primary" /></button>
        </form>
    );
}

export default TextInput;
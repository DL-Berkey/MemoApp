import React from 'react';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SaveIcon from '@mui/icons-material/Save';

function TextInput() {
    console.log('hi');
    return(
        <form>
            <input type="text" />
            <button><AspectRatioIcon /></button>
            <button><SaveIcon /></button>
        </form>
    );
} 

export default TextInput;
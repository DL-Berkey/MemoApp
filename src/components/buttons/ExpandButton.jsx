import AspectRatioIcon from '@mui/icons-material/AspectRatio';

export default function ExpandButton(props) {

    return(
        <button type="button" id="expandButton" onClick={ props.expand }><AspectRatioIcon color="primary" /></button>
    );
}
import { useContext } from "react";
import { PopupContext } from "../../App";
import './style.css'

export default function Popup() {

    const [popup, setPopup] = useContext(PopupContext);


    function handleClick(e) {
        console.log(e.target.tagName);
        if (e.target.tagName == 'DIV')
            setPopup('');

    }
    return <div
        className={`overlay ${popup ? '' : 'close'}`}
        // onClick={() => setPopup('')}>
        onClick={handleClick}>

        <div className='popup'>{popup}</div>
    </div>;
}


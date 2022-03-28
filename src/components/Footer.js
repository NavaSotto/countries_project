import { useContext } from "react";
import { PopupContext } from "../App";

export default function Footer() {
  const [, setPopup] = useContext(PopupContext);

  return (
    <footer onClick={() => setPopup("israel!!!")}>
     
    </footer>
  );
}

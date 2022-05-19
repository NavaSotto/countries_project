import Main from "./components/Main";
import Footer from "./components/Footer";
import Popup from "./components/Popup/Popup";
import { createContext, useState } from "react";
import Temperature from "./components/Weather/Temperature/Temperature"
import Error from "./components/Weather/Error/Error";

export const PopupContext = createContext();

function App() {
  const popupState = useState(""); // popup state
  //-> same like: const [popup,setPopup] = useState('start')

  return (

    <div className={`App`}>
      {/* //An area in which popupState is recognized */}
      <PopupContext.Provider value={popupState}>
        <Main />
        <Popup />
        <Footer /> {/*text in footer-set popupState recognized by context */}
      </PopupContext.Provider>

    </div>
  );
}

export default App;

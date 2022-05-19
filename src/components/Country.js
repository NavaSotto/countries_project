import { useContext } from "react";
import { PopupContext } from "../App";
import Temperature from "./Weather/Temperature/Temperature";

export default function Country(props) {
  const [popup, setPopup] = useContext(PopupContext); //set popup context
  const { flags, name, capital, region } = props; //create country item-take from full object of country specific data
  // set popup to countryopen components-send the full country object
  return (
    <li className="contryItem" onClick={() => setPopup(<CountryOpen {...props} />)}>
      <div className="flag" style={{ backgroundImage: `url(${flags.svg})` }} />
      <div className="name">
            <div><strong>{name.common}</strong> - {capital} </div>
            <label>{region}</label>
      </div>
    </li>
  );
}

function CountryOpen(props) {
  const { name = {}, flags = {}, languages = {}, population } = props;


  return (
    <div className="countryOpen">
      <h2>{name.common}</h2>
      <img src={flags.svg} />
      <h4>Population: </h4>
      <span>{population}</span>
      <h4>Languages:</h4>
      <div>{Object.values(languages).join(" , ")}</div>
    </div>
  );
}

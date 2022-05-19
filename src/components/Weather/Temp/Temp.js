import "./style.css";
import { useEffect, useState } from 'react';

export default function Temp(props) {
  const { tempNum } = props;
  const [type, setType] = useState(true);
  const [temp, setTemp] = useState({});

  useEffect(() => { setTemp({ 'celsius': `${tempNum}`, 'fahrenheit': celsiusToFahrenheit(tempNum) }); }, []);

  function celsiusToFahrenheit(celsius) {
    var cTemp = celsius;
    return cTemp * 9 / 5 + 32;

  }

  function fahrenheitToCelsius(fahrenheit) {
    var fTemp = fahrenheit;
    return (fTemp - 32) * 5 / 9;

  }

  return (<div >
    {temp ? <div name="toggleButton">
      <label className="toggle" >
        <input type="checkbox" onChange={() => setType(!type)} />
        <span className="slider"></span>
        <span className="labels" ></span>

      </label>
      <div >{type ? tempNum : temp.fahrenheit}</div></div>
      : <div></div>}

  </div>);
}





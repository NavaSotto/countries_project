import "./style.css";
import { useEffect, useState } from 'react';

import { WiDaySunny, WiSnowflakeCold } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiNightSnow } from "weather-icons-react";

export default function Icon(props) {

  const { tempNum } = props;
  //console.log(tempNum);


  const [icon, setIcon] = useState('');
  useEffect(() => {
    const t = tempNum >= 15 ? 'sun' : (tempNum >= 1 && tempNum >= 14) ? 'cloud' : 'snow';
    setIcon(t);
  }, []);
  return (<div >
    {icon == 'sun' ? <div className='flexIconClass'><WiDaySunny size={50}  />Sunny</div > : icon == 'cloud' ? <div className='flexIconClass'><WiCloudy size={50}  />Cloudy</div> : <div className='flexIconClass'><WiNightSnow size={50}  />Snowy</div>}</div>);


}
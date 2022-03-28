import { useState, createContext } from "react";
import React, { useEffect } from 'react';
import axios from 'axios';




export default function Location() {

  //-----------for circle text----------------

  //------------------------------------------

  const [countryDetails, setCountryDetails] = useState({
    countryName: '',
    cityName: ''
  });
  const [showCountry, setShowCountry] = useState(false);

  const [textImg, setTextImg] = useState({text:{ 
    characters: 'What Country Am I In?'.split(''),
     degree:'',
      arc: 120,
       radius: 120,class:'yellow' }});

  useEffect(() => {
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      console.log(data);
      setCountryDetails({
        countryName: data.country,
        cityName: data.city
      });
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  useEffect(changeTextImg,[showCountry]);

 function changeTextImg()
{
  const t=showCountry ? `I am in ${countryDetails.countryName} , ${countryDetails.cityName}` : 'What Country Am I In? ';
  setTextImg(prevState => ({
    text: {                   // object that we want to update
        ...prevState.text,    // keep all other key-value pairs
        characters: t.split('') ,    // update the value of specific key
        degree: textImg.text.arc / textImg.text.characters.length,
        class:showCountry ?'blue':'yellow'
    }
  }))
}



  return (
    <div className="wrapper" >
       <h5 className={`globeText ${textImg.text.class}`}>
        {textImg.text.characters.map((char, i) => (
          <span
            key={`heading-span-${i}`}
            style={{
              height: `${textImg.text.radius}px`,
              transform: `rotate(${textImg.text.degree * i - textImg.text.arc / 2}deg)`,
              transformOrigin: `0 ${textImg.text.radius}px 0`,
            }}>
            {char}
          </span>
        ))}
      </h5>
      <img className="globe" data-src="https://whatismycountry.com/i/logo64.png"  onMouseLeave={() => setShowCountry(!showCountry)}   onMouseOver={() => setShowCountry(!showCountry)} width="64" height="64" alt="Find out which country you are in" title="Find out which country you are in"  src="https://whatismycountry.com/i/logo64.png"></img>
    </div>
  );
}


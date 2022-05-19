import {useState, useRef, useEffect } from 'react'

import React from "react"
import axios from 'axios';


import Autocomplete from "react-google-autocomplete";


export default function Search() {
   

    const ApiKey = 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk';



        
        
       
        
       
        
        return(
            <Autocomplete
            apiKey={ApiKey}
            onPlaceSelected={(place) => console.log(place)}
          />
              );
           
        }


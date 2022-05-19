import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import Coordinates from '../Coordinates/Coordinates';
import Temp from '../Temp/Temp';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import './style.css';


export default function Temperature() {
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setlon] = useState([]);
    const locationKey = 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk';


    const [currentData, setCurrentData] = useState(
        {
            APPID: '1b2c7cf7ec395ecdf1b4ad785ed3c181',
            units: 'metric',
            coordinates: { "lon": "", "lat": "" },
            timeAndDate: '',
            temp: '',
            location: '',
            icon: ''
        }
    );





    useEffect(getCurrentPosition, []);

    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${currentData.APPID}&units=metric`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
                console.log(result);
            });
    }, [lat, lon]);
    useEffect(() => filterData(), [weather]
    );




    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setlon(position.coords.longitude);

        });

    }


    function filterData() {
        setCurrentData((previousState) => {
            const prev = previousState;
            return {
                ...prev,
                coordinates: { 'lon': findById(weather, 'lon'), 'lat': findById(weather, 'lat') },
                timeAndDate: getTimeAndDate(new Date((findById(weather, 'sunrise') + findById(weather, 'timezone')) * 1000)),
                temp: findById(weather, 'temp'),
                location: { 'country': findById(weather, 'country'), 'city': findById(weather, 'name') },
                icon: findById(weather, 'icon')
            };
        });

    }
    function getTimeAndDate(date) {
        console.log(date);
        const s = date.toString();
        //console.log(s);
        return s.substring(0, s.indexOf('GMT'));

    }
    function findById(obj, key) {
        var result;

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                // in case it is an object
                if (typeof obj[property] === "object") {
                    result = findById(obj[property], key);

                    if (typeof result !== "undefined") {
                        //console.log(result);
                        return result;
                    }
                }
                else if (property === key) {
                    //console.log(obj[key]);
                    return obj[key]; // returns the value
                }
            }
        }
    }
    function saveInLocalStorage(name, data) {
        var arr = JSON.parse(localStorage.getItem(name)) || [];
        // add to it,
        arr.push(data);
        // then put it back.
        localStorage.setItem(name, JSON.stringify(arr));




        // localStorage.clear();


    }


    return (<div className='weather-panel '>
       

                {/* <PlacesAutocomplete /> */}
            <div className='flexClass'>
                <h2>we are in</h2>
                <Location location={currentData.location} />
                <TimeAndDate timeAndDate={currentData.timeAndDate} />
                {/* <div className='flexClassRow'> */}
                <Icon tempNum={currentData.temp}  />
                <Temp tempNum={currentData.temp} />

                {/* <Coordinates coord={currentData.coordinates} /> */}

                {/* </div> */}

                {/* <button onClick={() => saveInLocalStorage('weatherData', currentData)}>save</button> */}
            






        </div>


    </div>

    );


}
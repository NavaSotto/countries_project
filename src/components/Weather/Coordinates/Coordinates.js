import "./style.css";

export default function Coordinates(props) {
    const { coord } = props;
    return <div><div className="weather">Latitude:<span className="content"> {coord.lat}</span></div><div className="weather">Longitude <span className="content"> {coord.lon}</span></div></div>;
}


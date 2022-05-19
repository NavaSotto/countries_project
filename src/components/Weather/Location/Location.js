import "./style.css";

export default function Location(props) {
  const {location} = props;
  //console.log(location);
  return <div className="weather"> <span>{location.country} </span><span >{location.city}</span></div>;
}
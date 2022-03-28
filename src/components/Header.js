import Search from "./Search";
import Location from "./Location";

export default function Header(props) {
    return <header>
        <Location/>
        <h1 className="title">Countries <span>({props.countriesNum})</span></h1>
        <Search />
        
    </header>
}
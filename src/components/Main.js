import Header from "./Header";
import CountriesList from "./CountriesList";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const SearchContext = createContext(); //create context use in search componenta in header
//get all data from api and send to components
export default function Main() {
  const [list, setList] = useState(), //state of list, set by getCountries
    [searchValue, setSearchValue] = useState(""); //state of searchValue, set by search that in header

  useEffect(getCountries, []); //in beggining of running we set the state list

  function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then((result) => {
      setList(result.data);
    });
  }

  if (!list) return "loading";

  const filteredList = list.filter((c) =>
    c.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  return (
    <main>
       <SearchContext.Provider value={setSearchValue}>
         <div className="headerClass">
         <Header countriesNum={filteredList.length} />

         </div>
      </SearchContext.Provider>
     
      <CountriesList list={filteredList} />
    </main>
  );
}

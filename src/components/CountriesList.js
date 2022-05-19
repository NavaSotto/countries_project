import Country from "./Country";

export default function CountriesList(props) {
  const { list } = props; //get filter list


  list.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  return (
    <ul>
      {/* //create country item from list */}
      {list.map((c) => (
        <Country key={c.cca2} {...c} />
      ))}
    </ul>
  );
}

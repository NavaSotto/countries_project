import Country from "./Country";

export default function CountriesList(props) {
  const { list } = props; //get filter list

  // create list of country

  //{...this.props} spreads out the "own" enumerable properties in props as discrete properties on the Modal element you're creating.
  //For instance, if this.props contained a: 1 and b: 2, then
  //<Modal {...this.props} title='Modal heading' animation={false}>
  //would be the same as
  //<Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>
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

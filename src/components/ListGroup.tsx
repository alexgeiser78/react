import { Fragment } from "react";
import { useState } from "react";

function ListGroup() {
  let city = ["Burriana", "Castellón", "Rio de la Plata"];
  let country = ["Switzerland", "Argentina"];
  let continent = ["Africa", "Europa"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: React.MouseEvent) => {
    console.log(event);
  };

  if (city.length === 0) return <p>No city</p>;

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>

        {/* cities */}
        {city.map((city, index) => (
          <li
            className="list-group-item"
            key={city}
            onClick={() => console.log(city, index)}
          >
            {city}
          </li>
        ))}

        {/* countries */}
        {country.map((country) => (
          <li className="list-group-item" key={country} onClick={handleClick}>
            {country}
          </li>
        ))}
        {continent.map((continent, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={continent}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {continent}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

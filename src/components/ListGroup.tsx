import { Fragment } from "react";

function ListGroup() {
  const city = ["Burriana", "Castellón", "Rio de la Plata"];

  if (city.length === 0) return <p>No city</p>;
  return (
    <Fragment>
      {/* ou <></>*/}
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        {city.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

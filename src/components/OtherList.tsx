import { useState } from "react";

interface Props {
  planet: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}

function OtherList({ planet, headings, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{headings}</h1>
      {planet.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {planet.map((planet, index) => (
          <li
            key={planet}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(planet);
            }}
          >
            {planet}
          </li>
        ))}
      </ul>
    </>
  );
}

export default OtherList;

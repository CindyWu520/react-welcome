import { useState } from "react";

export const FilterList = () => {
  const [filter, setFilter] = useState("");
  const fruits = ["Strawberry", "Apple", "Banana", "Orange", "Mango"];
  const filterFruits = fruits.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search fruit..."
        style={{ marginBottom: "10px" }}
      ></input>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {filterFruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {filterFruits.length === 0 && <p>No results found.</p>}
      </ul>
    </div>
  );
};

import { useState } from "react";
const styles = {
  backgroundColor: "white",
  color: "red",
};
export const AddRemoveItems = () => {
  const [items, setItems] = useState(["item1", "item2", "item3"]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);  // TODO: State is immutable
      setInputValue("");
    }
  };

  const removeItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Add new item"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
        ></input>
        <button style={styles} onClick={addItem}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button style={styles} onClick={() => removeItem(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

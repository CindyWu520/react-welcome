import { useState } from "react";
export const SingleInput = () => {
  const [name, setName] = useState("");
  const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} placeholder="put your name here" onChange={handleInput} />
    </div>
  );
};

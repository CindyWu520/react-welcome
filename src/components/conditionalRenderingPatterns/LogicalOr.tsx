import { useEffect, useState } from "react";

export const LogicalOr = () => {
  const [userName, setUsername] = useState("");
  useEffect(() => {
    console.log(`The new username is ${userName} `);
  }, [userName]);
  return (
    <div>
      <input
        type="text"
        value={userName} // input always shows whatever is in React state
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <p>Hello, {userName || "Guest!"} </p>
    </div>
  );
};

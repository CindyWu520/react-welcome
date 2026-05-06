import { useState } from "react";

export const TernaryOperator = () => {
  const [isDay, setIsDay] = useState(false);

  return (
    <div>
      <p>{isDay ? "🌅Good Morning!" : "😴Good night!"}</p>
      <button onClick={() => setIsDay(!isDay)}>Toggle Time</button>
    </div>
  );
};

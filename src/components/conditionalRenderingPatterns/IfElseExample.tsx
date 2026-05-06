import { useState } from "react";

export const IfElseExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if (isLoggedIn) {
    message = <p>Welcome back!</p>;
  } else {
    message = <p>please log in</p>;
  }

  return (
    <div>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

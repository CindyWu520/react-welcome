import { useState } from "react";

export const MultipleConditions = () => {
  const [status, setStatus] = useState("Pending");

  const getStatusMessage = () => {
    if (status === "Pending") return "⌛Processing";
    if (status === "Success") return "😊Successful";
    if (status === "Error") return "❌Error occured";
    return "❓🤔 Unknown status";
  };
  return (
    <div>
      <p>{getStatusMessage()}</p>
      <button onClick={() => setStatus("Pending")}>Pending</button>
      <br />
      <button onClick={() => setStatus("Success")}>Success</button>
      <br />
      <button onClick={() => setStatus("Error")}>Error</button>
      <br />
    </div>
  );
};

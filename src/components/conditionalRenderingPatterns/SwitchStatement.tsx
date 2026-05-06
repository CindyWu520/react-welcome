import { useState } from "react";

export const SwitchStatement = () => {
  const [role, setRole] = useState("Select Dashboard");

  const renderContent = () => {
    switch (role) {
      case "Admin":
        return <p>👑Admin DashBoard</p>;
      case "Moderate":
        return <div>💎Moderate DashBoard</div>;
      case "User":
        return <div>💍User DashBoard</div>;
      case "Guest":
        return <div>🪙Guest DashBoard</div>;
      default:
        return <div>👆Select DashBoard</div>;
    }
  };

  return (
    <div>
      {renderContent()}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setRole("Admin")}>Admin</button>
        <button onClick={() => setRole("Moderate")}>Moderate</button>
        <button onClick={() => setRole("User")}>User</button>
        <button onClick={() => setRole("Guest")}>Guest</button>
      </div>
    </div>
  );
};

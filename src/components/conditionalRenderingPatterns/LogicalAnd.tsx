import { useState } from "react";

export const LogicalAnd = () => {
  const [hasNotification, setHasNotification] = useState(true);
  const count = 3;

  return (
    <div>
      {hasNotification && <span>🔔You have {count} message</span>}
      <br />
      <button onClick={() => setHasNotification(!hasNotification)}>
        Toggle Notifications
      </button>
    </div>
  );
};

type userProps = {
  name: string;
  role: "admin" | "user";
  verified: boolean;
};
export const User = ({ name, role, verified }: userProps) => {
  const clickEvent = (name: string) => {
    alert(`hello, ${name}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <h2>{name}</h2>
      <p>{role}</p>
      {verified && <span>☑️</span>}
      <button
        // inline function
        // onClick={() => {
        //   alert(`hello, ${name}`);
        // }}

        onClick={() => clickEvent(name)}
      >
        User info
      </button>
    </div>
  );
};

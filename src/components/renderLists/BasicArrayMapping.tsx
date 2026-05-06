export const BasicArrayMapping = () => {
  const fruits = [
    { id: 1, fruit: "Strawberry" },
    { id: 2, fruit: "Apple" },
    { id: 3, fruit: "Banana" },
    { id: 4, fruit: "Orange" },
    { id: 5, fruit: "Mango" },
  ];

  return (
    <div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.fruit}</li>
        ))}
      </ul>
    </div>
  );
};

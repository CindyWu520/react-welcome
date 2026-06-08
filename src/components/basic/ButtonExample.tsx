const styles = {
  backgroundColor: "blue",
  color: "dark",
  padding: "8px",
};

// Example1: Basic Click handler
// export const ButtonExample = () => {
//   const handleClick = () => {
//     alert("Button clicked!");
//   };
//   return (
//     <button style={styles} onClick={handleClick}>
//       click me
//     </button>
//   );
// };

// Example 2: Inline handler
export const ButtonExample = () => {
  return (
    <>
      <button
        style={styles}
        // Example 3: hanlder with event paramter
        onClick={(event) => {
          console.log("event: ", event);
          console.log("target: ", event.target);
          console.log("type: ", event.type);
          alert("Button Clicked!");
        }}
      >
        click me
      </button>
    </>
  );
};

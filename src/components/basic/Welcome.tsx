type welcomeProps = {
  name: string;
  handleSingleNameChange: (newName: string) => void
};
// arrow function components
// 接受回调函数
export const Welcome = ({ name, handleSingleNameChange }: welcomeProps) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 调用回调函数，将子组件的数据传递给父组件
    handleSingleNameChange(event.target.value);
  };
  return (
    <div>
      <h1>{name} welcome to React</h1>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

// class components

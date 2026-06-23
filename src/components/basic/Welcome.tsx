import type { WelcomeProps } from "../../types/WelcomeProps";

// 接受回调函数
export const Welcome: React.FC<WelcomeProps> = ({
  name,
  handleSingleNameChange,
}) => {
  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // 调用回调函数，将子组件的数据传递给父组件
    handleSingleNameChange(event.target.value);
  };
  return (
    <div>
      <h1>{name} welcome to React</h1>
      <input
        className="border border-gray-400 rounded-b-lg"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
};

// class components

export type WelcomeProps = {
  name: string;
  handleSingleNameChange: (newName: string) => void
};

// 交叉类型操作符：扩展 '&'
export type WelcomeProps2 = WelcomeProps & {
    name: string;
    role: string;
}
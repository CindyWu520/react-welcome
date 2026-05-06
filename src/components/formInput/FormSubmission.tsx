import { useState } from "react";
type FormSubmissionType = {
  userName: string;
  password: string;
};
export const FormSubmission = () => {
  const [input, setInput] = useState<FormSubmissionType>({
    userName: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value })); // TODO: Functional updates
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent reload
    if (!input.userName.trim() || !input.password.trim()) {
      setMessage("❌Please fill in all feilds!");
      return;
    }

    console.log(
      "UserName: ",
      input.userName,
      "Password: ",
      input.password,
      " is Logging",
    );
    setMessage("✅Form submitted successfully!");

    // send to API
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={input.userName}
          placeholder="Username"
          onChange={handleInputValue}
        />
        <br />
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Password"
          onChange={handleInputValue}
        />
        <br />
        <button
          type="submit"
          style={{ backgroundColor: "white", color: "black" }}
        >
          Submit
        </button>
        <br />
        {message}
      </form>
    </div>
  );
};

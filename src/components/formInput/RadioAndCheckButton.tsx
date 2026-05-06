import { useState } from "react";
export const RadioAndCheckButton = () => {
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    gender: "",
    termsAccepted: "",
  });

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    setErrors((prev) => ({ ...prev, gender: "" }));
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
    setErrors((prev) => ({ ...prev, termsAccepted: "" }));
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    // validate
    const newErrors = { gender: "", termsAccepted: "" };
    if (!gender) newErrors.gender = "Please select your gender.";
    if (!termsAccepted)
      newErrors.termsAccepted = "You must accept terms and conditions.";
    if (newErrors.gender || newErrors.termsAccepted) {
      setErrors(newErrors);
      return;
    }
    setErrors({ gender: "", termsAccepted: "" });
    // log
    console.log("gender :", gender, "TermsAccepted: ", termsAccepted);
    setMessage("😊Register successfully.");

    // send to API
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleRadio}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleRadio}
          />{" "}
          Female
        </label>
        <br />
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        <br />
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={termsAccepted}
            onChange={handleCheck}
          />{" "}
          I accept the terms and conditions
        </label>
        <br />
        {errors.termsAccepted && (
          <p style={{ color: "red" }}>{errors.termsAccepted}</p>
        )}
        <br />
        <button type="submit">Register</button>
        <br />
        {message && <p>{message}</p>}
        {/* {message} */}
      </form>
    </div>
  );
};

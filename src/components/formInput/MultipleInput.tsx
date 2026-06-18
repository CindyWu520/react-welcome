import useForm from "../../hooks/useForm";
export const MultipleInput = () => {
  const {formData, handleChange} = useForm();

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <br />
      <strong>Name:</strong> {formData.firstName} {formData.lastName}
      <br />
      <strong>Email:</strong> {formData.email}
    </div>
  );
};

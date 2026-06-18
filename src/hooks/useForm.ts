import { useState } from "react";
interface FormDate {
  firstName: string;
  lastName: string;
  email: string;
}
const useForm = () => {
    const [formData, setFormData] = useState<FormDate>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prv) => ({
      ...prv,
      [name]: value,
    }));
  };

  return {formData, handleChange}
}

export default useForm;
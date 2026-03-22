import { useState } from "react";
import signupValidator from "../validator/signupValidator";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = signupValidator(formData);
    if (
      errors.name ||
      errors.email ||
      errors.password ||
      errors.confirmPassword
    ) {
      setFormErrors(errors);
    } else {
      try {
        setLoading(true);
          // api request
          const requestBody ={
            name: formData.name,
            email: formData.email,
            password: formData.password
          }
          const response = await axios.post('http://localhost:5000/api/v1/auth/signup', requestBody);
          console.log;(response);
          setFormErrors(initialFormErrors);
        setLoading(false);
      } catch (err: any) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="form-container">
      <form
        action=""
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Signup</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
          {formErrors.password && (
            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            onChange={handleChange}
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.confirmPassword}
            </p>
          )}
        </div>
        <button
          className="bg-violet-600 mt-2 text-white py-2 px-4 rounded-md hover:bg-violet-700"
          type="submit"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

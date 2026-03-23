import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";
import "../styles/global.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.name || !form.email || !form.password || !form.contact) {
      alert("Please fill all fields");
      return;
    }

    console.log(form); // future backend ke liye

    // redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box fade-in">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Details"
            onChange={handleChange}
          />

          <button className="btn" type="submit">
            Create Account 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
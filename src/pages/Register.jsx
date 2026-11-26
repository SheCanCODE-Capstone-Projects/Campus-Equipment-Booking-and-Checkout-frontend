
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  Lock,
  BookOpen,
  Hash
} from "lucide-react";

import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    traineeId: "",
    program: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    alert("Registration form submitted successfully!");

    // Backend account creation will be added later.
    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-header">
       <img src="/logo.jfif" alt="logo" />
         

          <h1>IGIRE RWANDA ORGANIZATION</h1>
          <p>Equipment Booking & Checkout Portal</p>
        </div>

        <div className="register-card">

          <div className="register-title">
            <h2>Create Your Account</h2>
            <p>
              Register as a trainee to access equipment
              booking services.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="name-fields">
              <div className="register-group">
                <label>First Name</label>
                <div className="register-input">
                  <User size={18} />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="register-group">
                <label>Last Name</label>
                <div className="register-input">
                  <User size={18} />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="register-group">
              <label>Email Address</label>
              <div className="register-input">
                <Mail size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="register-group">
              <label>Phone Number</label>
              <div className="register-input">
                <Phone size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+250 7XX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="register-group">
              <label>Trainee ID</label>
              <div className="register-input">
                <Hash size={18} />
                <input
                  type="text"
                  name="traineeId"
                  placeholder="Enter your trainee ID"
                  value={formData.traineeId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="register-group">
              <label>Course / Program</label>
              <div className="register-input">
                <BookOpen size={18} />
                <input
                  type="text"
                  name="program"
                  placeholder="Enter your course or program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="register-group">
              <label>Password</label>
              <div className="register-input">
                <Lock size={18} />
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="8"
                  required
                />
              </div>
            </div>

            <div className="register-group">
              <label>Confirm Password</label>
              <div className="register-input">
                <Lock size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength="8"
                  required
                />
              </div>
            </div>

            <button type="submit" className="create-account-btn">
              Create Account
            </button>

          </form>

          <div className="back-to-login">
            Already have an account?
            <Link to="/"> Sign In</Link>
          </div>

        </div>

        <footer className="register-footer">
          © 2026 Igire Rwanda. All rights reserved.
        </footer>

      </div>
    </div>
  );
}

export default Register;

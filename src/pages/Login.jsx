import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import heroImg from "../assets/hero.png";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setLoginError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      email: "",
      password: "",
    };

    const adminEmail = "admin@holointeract.com";
    const adminPassword = "Admin@123";

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password Validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    // Admin Authentication
    if (
      formData.email === adminEmail &&
      formData.password === adminPassword
    ) {
      login();

      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password.");
    }
  }

  return (
    <div className="login-page">

      {/* LEFT SECTION */}

      <div className="login-left">

        <img
          src={heroImg}
          alt="HoloInteract"
          className="hero-image"
        />

        <h1>HoloInteract</h1>

        <p>
          Control your holographic ecosystem from one intelligent dashboard.
        </p>

      </div>

      {/* RIGHT SECTION */}

      <div className="login-right">

        <form
          className="login-card"
          onSubmit={handleSubmit}
        >

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Sign in to continue.
          </p>

          {/* EMAIL */}

          <div className="input-box">

            <FiMail />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {errors.email && (
            <p className="error-text">
              {errors.email}
            </p>
          )}

          {/* PASSWORD */}

          <div className="input-box">

            <FiLock />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          {errors.password && (
            <p className="error-text">
              {errors.password}
            </p>
          )}

          {loginError && (
            <p className="login-error">
              {loginError}
            </p>
          )}

          {/* OPTIONS */}

          <div className="login-options">

            <label>

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              Remember Me

            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
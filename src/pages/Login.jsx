
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dummyUsers, findDummyUser } from "../data/dummyUsers";

import {
  GraduationCap
} from "lucide-react";

import "../styles/Login.css";

function Login() {
  const [userType, setUserType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const demoUser = dummyUsers.find((user) => user.role === userType);

  function handleSubmit(e) {
    e.preventDefault();
    const user = findDummyUser(userType, email, password);

    if (!user) {
      setError("Incorrect email or password for " + (userType === "staff" ? "staff" : "student") + " access.");
      return;
    }

    setError("");
    navigate(user.redirectTo);
  }

  function fillDemo() {
    setEmail(demoUser.email);
    setPassword(demoUser.password);
    setError("");
  }

  return (
    <div className="login-page">

      {/* Header */}

      <header className="login-header">

        <div className="brand">

          <div className="brand-logo">
            <GraduationCap size={30} />
          </div>

          <div className="brand-text">
            <h2>Igire Rwanda Organization</h2>
            <p>EQUIPMENT & GOWN PORTAL</p>
          </div>

        </div>

      </header>

      {/* Main Login */}

      <main className="login-main" id="login">

        <section className="login-panel">

          {/* Graduation Emblem */}

          <div className="login-emblem">
            <GraduationCap size={40} />
          </div>

          <p className="official-label">
            OFFICIAL REGISTRY
          </p>

          <h1>Equipment & Gown Portal</h1>

          <p className="login-subtitle">
            Sign in to access your SheCanCODE graduation
            kit and laboratory equipment inventory.
          </p>

          {/* Student and Staff Tabs */}

          <div className="access-tabs">

            <button
              type="button"
              className={userType === "student" ? "selected" : ""}
              onClick={() => { setUserType("student"); setError(""); }}
            >
              ♙ Student Access
            </button>

            <button
              type="button"
              className={userType === "staff" ? "selected" : ""}
              onClick={() => { setUserType("staff"); setError(""); }}
            >
              ▣ Staff Operations
            </button>

          </div>

          {/* Login Form */}

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            <label htmlFor="email">
              INSTITUTIONAL EMAIL
            </label>

            <div className="form-input">

              <span>@</span>

              <input
                type="email"
                id="email"
                placeholder="Enter institutional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* Password */}

            <div className="password-label">

              <label htmlFor="password">
                SECURITY KEY / PASSWORD
              </label>

              <a href="#forgot">Forgot Key?</a>

            </div>

            <div className="form-input">

              <span>♙</span>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "◉"}
              </button>

            </div>

            {/* Remember Me */}

            <label className="remember-me">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              Keep my session active for 30 days

            </label>

            {error && (
              <p className="login-error" role="alert">{error}</p>
            )}

            {/* Sign In Button */}

            <button
              type="submit"
              className="sign-in-button"
            >
              Sign In to Workspace →
            </button>

          </form>

          {/* Demo credentials (dummy data, remove when backend is ready) */}

          <div className="demo-credentials">
            <p>
              <strong>Demo {userType} login:</strong> {demoUser.email} / {demoUser.password}
            </p>
            <button type="button" onClick={fillDemo}>
              Use demo account
            </button>
          </div>

          {/* Registration */}

          <p className="register-link">

            Don't have an active account?

            <Link to="/register">
              Register as New Trainee →
            </Link>

          </p>

          {/* Authorization Notice */}

          <div className="authorization-box">

            <h4>
              ⓘ Authorized IRO Personnel & Cohort UI Only
            </h4>

            <p>
              Need assistance with automatic gown or equipment
              checkouts? Contact Campus Registrar.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Login;




import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [userType, setUserType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="login-page">

      {/* Header upwards */}

      <header className="login-header">
        <div className="brand">
          <div className="brand-logo">♧</div>

          <div className="brand-text">
            <h2>Igire Rwanda Organization</h2>
            <p>EQUIPMENT & GOWN PORTAL</p>
          </div>
        </div>

        <div className="header-actions">
          <a href="#login">Portal Sign In</a>
          <a href="#assistance">Assistance</a>
          <div className="user-icon">●</div>
        </div>
      </header>

      {/* Main Login */}

      <main className="login-main" id="login">

        <section className="login-panel">

          <div className="login-emblem">♧</div>

          <p className="official-label">
            OFFICIAL REGISTRY
          </p>

          <h1>Equipment & Gown Portal</h1>

          <p className="login-subtitle">
            Sign in to access your SheCanCODE graduation
            kit and laboratory equipment inventory.
          </p>

          {/* Access Tabs */}

          <div className="access-tabs">

            <button
              type="button"
              className={userType === "student" ? "selected" : ""}
              onClick={() => setUserType("student")}
            >
              ♙ Student Access
            </button>

            <button
              type="button"
              className={userType === "staff" ? "selected" : ""}
              onClick={() => setUserType("staff")}
            >
              ▣ Staff Operations
            </button>

          </div>

          {/* Login Form */}

          <form
            className="login-form"
            onSubmit={(e) => e.preventDefault()}
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
                required
              />
            </div>

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

            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              Keep my session active for 30 days
            </label>

            <button type="submit" className="sign-in-button">
              Sign In to Workspace →
            </button>

          </form>

          {/* Registration */}


          <p className="register-link">
            Don't have an active account?

            <a href="#register">
              Register as New Trainee →
            </a>
          </p>


          {/* Authorization Notice */}
          
          <div className="authorization-box">
            <h4>ⓘ Authorized IRO Personnel & Cohort UI Only</h4>

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

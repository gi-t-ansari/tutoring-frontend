import "./Login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    console.log({ email, password });
  };

  return (
    <div className="login-main">
      <Header />
      <section className="login-wrapper">
        <form
          className="login-form"
          onSubmit={handleSubmit}
          //   onSubmit={(e) => handleSubmit(e)}
          //   onSubmit={(e) => {
          //     e.preventDefault();
          //     handleSubmit();
          //   }}
        >
          <h2 className="heading">Login</h2>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              placeholder="Enter email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              placeholder="Enter password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length >= 6) {
                  setPasswordError("");
                }
              }}
              required
            />
            {passwordError?.length ? (
              <p className="input-error">{passwordError}</p>
            ) : null}
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
          <p className="desc">
            <span className="text">Don’t have an account?</span>
            <span className="text" onClick={() => navigate("/register")}>
              Register Now
            </span>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;

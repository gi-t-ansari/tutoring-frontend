import "./Login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommonInput from "../../components/CommonInput/CommonInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

          <CommonInput
            label={"Email"}
            type={"email"}
            id={"email-input"}
            placeholder={"Enter email"}
            required={true}
            setValue={setEmail}
            emailError={emailError}
          />

          <CommonInput
            label={"Password"}
            type={showPassword ? "text" : "password"}
            id={"password-input"}
            placeholder={"Enter password"}
            required={true}
            setValue={setPassword}
            error={passwordError}
            showPasswordIcon={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

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

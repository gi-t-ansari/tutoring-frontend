import { useState } from "react";
import "./CommonInput.css";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const CommonInput = ({
  label,
  type,
  id,
  placeholder,
  required,
  setValue,
  error,
  showPasswordIcon,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <div className="input-container">
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />

        {showPasswordIcon ? (
          showPassword ? (
            <FaRegEye className="icon" onClick={() => setShowPassword(false)} />
          ) : (
            <FaEyeSlash
              className="icon"
              onClick={() => setShowPassword(true)}
            />
          )
        ) : null}
      </div>

      {error?.length ? <p className="input-error">{error}</p> : null}
    </div>
  );
};

export default CommonInput;

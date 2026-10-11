import "./index.css";

const CommonDropdownInput = ({ id, label, setValue, options }) => {
  return (
    <div className="dropdown-container">
      <label htmlFor={id} className="dropdown-label">
        {label}
      </label>
      <select
        id={id}
        onChange={(e) => setValue(e.target.value)}
        className="dropdown-input"
      >
        {options.map((ele) => (
          <option
            key={ele.value}
            value={ele.value}
            className="dropdown-options"
          >
            {ele.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonDropdownInput;

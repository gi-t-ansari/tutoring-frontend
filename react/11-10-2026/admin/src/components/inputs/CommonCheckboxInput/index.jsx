import "./index.css";

const CommonCheckboxInput = ({ mainLabel, options, inputName, setValue }) => {
  return (
    <div className="checkbox-container">
      <div className="checkbox-main-label">{mainLabel}</div>

      {options.map((ele) => (
        <div key={ele.value} className="checkbox-wrapper">
          <label htmlFor={ele.value} className="checkbox-label">
            {ele.label}
          </label>
          <input
            id={ele.value}
            type="checkbox"
            name={inputName}
            value={ele.value}
            onChange={(e) =>
              setValue((prev) => {
                if (prev?.includes(e.target.value)) {
                  return prev.filter((ele) => ele !== e.target.value);
                } else {
                  return [...prev, e.target.value];
                }
              })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CommonCheckboxInput;

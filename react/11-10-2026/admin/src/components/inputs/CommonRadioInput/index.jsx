import "./index.css";

const CommonRadioInput = ({ mainLabel, options, inputName, setValue }) => {
  return (
    <div className="radio-container">
      <div className="radio-main-label">{mainLabel}</div>

      {/*<label htmlFor="male">Male</label>
       <input
        id="male"
        type="radio"
        name="gender"
        value={"male"}
        onChange={(e) => setSelectedGender(e.target.value)}
      />

      <label htmlFor="female">Female</label>
      <input
        id="female"
        type="radio"
        name="gender"
        value={"female"}
        onChange={(e) => setSelectedGender(e.target.value)}
      /> */}

      {/*--------------- OR --------------*/}

      {/* {GENDER_OPTIONS.map((ele) => (
        <div key={ele.value}>
          <label htmlFor={ele.value}>{ele.label}</label>
          <input
            id={ele.value}
            type="radio"
            name="gender"
            value={ele.value}
            onChange={(e) => setSelectedGender(e.target.value)}
          />
        </div>
      ))} */}

      {options.map((ele) => (
        <div key={ele.value} className="radio-wrapper">
          <label htmlFor={ele.value} className="radio-label">
            {ele.label}
          </label>
          <input
            id={ele.value}
            type="radio"
            name={inputName}
            value={ele.value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CommonRadioInput;

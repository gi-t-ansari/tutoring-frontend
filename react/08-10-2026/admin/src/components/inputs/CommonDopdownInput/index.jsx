import { useState } from "react";
import "./index.css";

const CommonDropdownInput = () => {
  const [gender, setGender] = useState("");

  console.log(gender);

  return (
    <div>
      <label htmlFor="gender">Select Gender</label>
      <select id="gender" onChange={(e) => setGender(e.target.value)}>
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
      </select>
    </div>
  );
};

export default CommonDropdownInput;

import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [someCondition, setSomeCondition] = useState(true);
  return (
    someCondition && (
      <header className="header-container">
        <h1 className="heading">App</h1>
        <span className="logo">Logo</span>
      </header>
    )
  );
};

export default Header;

// if (true) {
//   console.log(true);
// }

// true && console.log(true);

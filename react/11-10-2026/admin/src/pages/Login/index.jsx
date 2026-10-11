import { useEffect, useState } from "react";
import { CommonDropdownInput, CommonRadioInput } from "../../components/inputs";
import { FAVOURITE_GAME, GENDER_OPTIONS } from "../../constants/constants";
import "./index.css";
import CommonCheckboxInput from "../../components/inputs/CommonCheckboxInput";

const Login = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedGame, setSelectedGame] = useState("");

  const [selectedGenderByRadio, setSelectedGenderByRadio] = useState("");
  const [selectedGameByRadio, setSelectedGameByRadio] = useState("");

  const [selectedGames, setSelectedGames] = useState([]);

  // Runs only once
  useEffect(() => {
    console.log("Runs only once");
  }, []);

  // Runs every time the value of selectedGender changes
  useEffect(() => {
    console.log("Runs every time the value of selectedGender changes");
  }, [selectedGender]);

  // Runs on every re render
  useEffect(() => {
    console.log("Runs on every re render");
  });

  return (
    <div>
      <CommonDropdownInput
        label={"Select Gender"}
        options={GENDER_OPTIONS}
        setValue={setSelectedGender}
      />

      <CommonDropdownInput
        label={"Select Your Favourite Game"}
        options={FAVOURITE_GAME}
        setValue={setSelectedGame}
      />

      <CommonRadioInput
        mainLabel={"Select Gender"}
        options={GENDER_OPTIONS}
        inputName={"gender"}
        setValue={setSelectedGenderByRadio}
      />

      <CommonRadioInput
        mainLabel={"Select Game"}
        inputName={"game"}
        options={FAVOURITE_GAME}
        setValue={setSelectedGameByRadio}
      />

      <CommonCheckboxInput
        mainLabel={"Select Games"}
        inputName={"games"}
        options={FAVOURITE_GAME}
        setValue={setSelectedGames}
      />
    </div>
  );
};

export default Login;

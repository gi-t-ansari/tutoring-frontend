import UserCard from "./components/Cards/UserCard/UserCard";
import PopUp from "./components/Popups/PopUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <UserCard name={"Neha"} age={30} />
      <UserCard name={"Shantanu"} age={31} />
      <UserCard name={"tanzeel"} age={27} />
      <PopUp />
      <Header />
      <Footer />
    </>
  );
}

export default App;

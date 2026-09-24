import "./App.css";
import UserCard from "./components/Cards/UserCard/UserCard";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";

function App() {
  return (
    // <>
    //   <Header />
    //   <div className="app-container">
    //     <UserCard
    //       imageLink={
    //         "https://img.magnific.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80"
    //       }
    //       name={"Neha"}
    //       description={"Neha is a good girl"}
    //     />
    //     <UserCard
    //       imageLink={
    //         "https://img.magnific.com/premium-vector/cartoon-illustration-manager_272293-4622.jpg?semt=ais_hybrid&w=740&q=80"
    //       }
    //       name={"Siddharth"}
    //       description={"Siddharth works in bollywood"}
    //     />
    //   </div>
    // </>
    <main className="app-container">
      <Counter />
    </main>
  );
}

export default App;

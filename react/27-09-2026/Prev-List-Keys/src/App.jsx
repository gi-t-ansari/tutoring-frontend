import "./App.css";
import Counter from "./components/Counter/Counter";
import UserCard from "./components/UserCard/UserCard";
import { users } from "./constants";

function App() {
  return (
    <main className="app-container">
      {/* <Counter /> */}

      {users.map((ele, ind) => (
        <UserCard
          key={ele.id}
          name={ele.name}
          email={ele.email}
          age={ele.age}
        />
      ))}
    </main>
  );
}

export default App;

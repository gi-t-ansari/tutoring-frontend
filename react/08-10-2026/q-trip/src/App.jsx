import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import City from "./pages/City/City";
import Adventure from "./pages/Adventure/Adventure";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="city" element={<City />} />
        <Route path="adventure" element={<Adventure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import Adventures from "./pages/Adventure/Adventures";
import ReservationDetails from "./pages/ReservationDetails/ReservationDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="reservations/details" element={<ReservationDetails />} />
        <Route path="adventures" element={<Adventures />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

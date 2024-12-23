import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import BookOffice from "./pages/BookOffice";
import CityDetails from "./pages/CityDetails";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooling";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />}/>
        <Route path="/office/:slug" element={<Details />}/>
        <Route path="/office/:slug/book" element={<BookOffice />}/>
        <Route path="/city/:slug" element={<CityDetails />}/>
        <Route path="/success-booking" element={<SuccessBooking />}/>
        <Route path="/check-booking" element={<CheckBooking />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
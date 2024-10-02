import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCookies from "./pages/AddCookies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cookies" element={<AddCookies />} />
      </Routes>
    </Router>
  );
}

export default App;

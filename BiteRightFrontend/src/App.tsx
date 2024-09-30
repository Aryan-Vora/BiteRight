import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Plan from "./pages/Plan";
import TOS from "./pages/TOS";
import PrivatePolicy from "./pages/PrivatePolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="/private-policy" element={<PrivatePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;

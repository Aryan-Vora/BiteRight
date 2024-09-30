import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Plan from "./pages/Plan";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import Cards from "./Components/Cards"
import CardDetail from "./Components/CardDetail";
import Navbar from "./Components/Navbar";
import "./Components/styles.css";

function App() {
  return (
    <div>
      
      <nav className="app-nav">
        <Navbar/>
        {/* <Link to="/">Home</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;

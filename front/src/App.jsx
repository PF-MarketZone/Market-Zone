import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}



export default App;

import * as React from "react";

import ButtonExample from "./pages/ButtonExample";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>APIS COMPONENT DEMO</h1>
    <div>
      <Link to="/button">Button</Link>
    </div>
  </div>
);

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/button" element={<ButtonExample />} />
      </Routes>
    </div>
  );
}

export default App;

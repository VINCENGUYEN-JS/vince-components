import * as React from "react";

import ButtonExample from "./pages/ButtonExample";
import DividerExample from "./pages/DividerExample";
import LayoutExample from "./pages/LayoutExample";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>APIS COMPONENT DEMO</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/button">Button</Link>
        <Link to="/divider">Divider</Link>
        <Link to="/layout">Layout</Link>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/button" element={<ButtonExample />} />
        <Route path="/divider" element={<DividerExample />} />
        <Route path="/layout" element={<LayoutExample />} />
      </Routes>
    </div>
  );
}

export default App;

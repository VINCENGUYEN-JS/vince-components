import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  ButtonExample,
  DividerExample,
  GridExample,
  LayoutExample,
} from "./pages";

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
        <Link to="/grid">Grid</Link>
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
        <Route path="/grid" element={<GridExample />} />
        <Route path="/layout" element={<LayoutExample />} />
      </Routes>
    </div>
  );
}

export default App;

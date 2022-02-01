import * as React from "react";

import ButtonExample from "./pages/ButtonExample";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => <Link to="/button">Button</Link>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/button" element={<ButtonExample />} />
      </Routes>
    </div>
  );
}

export default App;

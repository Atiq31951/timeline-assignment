import { Routes, Route } from "react-router";

import "./App.css";

import TimeLine from "./pages/TimeLine";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TimeLine />} />
    </Routes>
  );
}

export default App;

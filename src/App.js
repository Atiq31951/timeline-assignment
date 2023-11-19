import { Routes, Route } from "react-router";
import "./styles/app.scss";

import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Login from "./pages/Login";

function App() {
  return (
    
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;

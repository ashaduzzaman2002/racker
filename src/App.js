import { Route, Routes } from "react-router-dom";
import Login from "./screens/auth/Login";
import Home from './screens/Home';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;

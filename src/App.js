import { Route, Routes } from "react-router-dom";
import Login from "./screens/auth/Login";
import Home from './screens/Home';
import Navbar from "./components/Navbar";
import NewSession from "./screens/NewSession";
import AddHand from "./screens/AddHand";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/new-session" element={<NewSession />} />
      <Route path="/add-hand" element={<AddHand />} />
    </Routes>
    </>
  );
}

export default App;

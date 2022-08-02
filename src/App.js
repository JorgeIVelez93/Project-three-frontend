import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Failure from "./components/Failure";
import User from "./components/User";
import Main from "./components/Main";
import Parks from "./components/Parks";
import Park from "./components/Park";
import ViewAllPosts from "./components/ViewAllPosts";
import Sources from "./components/Sources";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" element={<Navigate to="/user/:user" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/user/:user" element={<User />} />
        <Route path="/main" element={<Main />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/park/:park" element={<Park />} />
        <Route path="/view-all" element={<ViewAllPosts />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/*" element={<Failure />} />
      </Routes>
    </div>
  );
}

export default App;

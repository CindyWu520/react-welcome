import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { UserPage } from "./components/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/users" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

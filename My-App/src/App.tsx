import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

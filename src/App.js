import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Basket from "./pages/Basket";
import { useState } from "react";
function App() {
  const [basketItem,setBasketItem] = useState([]);
  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Sidebar>
      <Basket  />
    </BrowserRouter>
    </div>
    
  );
}

export default App;

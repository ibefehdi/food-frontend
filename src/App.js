import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Basket from "./pages/Basket";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path ="/api/:id" element={<ProductPage />} />
        </Routes>
      </Sidebar>
      <Basket  />
    </BrowserRouter>
    </div>
    
  );
}

export default App;

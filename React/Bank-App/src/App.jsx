import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from "./pages/Login";
import { Hooks } from "./pages/Hooks";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/hooks" element={<Hooks />} />
    </Routes>
  )
}

export default App

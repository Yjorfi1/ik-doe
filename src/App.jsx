// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import NavBar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import NavBar from "./components/Navbar";
import Footer from './components/Footer'
import "./App.css";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
        <Footer/>

    </>
  );
}

export default App;
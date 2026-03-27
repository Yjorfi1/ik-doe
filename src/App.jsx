import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import ProductionDetail from './Components/ProductionDetail';
import NavBar from "./Components/Navbar";
import SoloProductions from './Components/SoloProductions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="SoloProductions" element={<SoloProductions />} />
          <Route path="SoloProduction/:id" element={<ProductionDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SoloProductions() {
  const [selectedProduction, setSelectedProduction] = useState(null);
  const navigate = useNavigate();

  const productions = [
    { id: 'level-twenty-nine', title: 'LEVEL TWENTY NINE', type: 'COMMERCIAL' },
    { id: 'voetbalclub-x', title: 'VOETBALCLUB X', type: 'DOCUMENTAIRE' },
    { id: 'club-x', title: 'CLUB X', type: 'PROMOTION' },
  ];

  const handleCardClick = (id) => {
    setSelectedProduction(id);
    navigate(`/SoloProduction/${id}`);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>IKDOE</h1>
        <p>SOLO PRODUCTIES</p>
      </header>

      <div className="gallery">
        {productions.map((production) => (
          <div
            key={production.id}
            className="gallery-item"
            onClick={() => handleCardClick(production.id)}
            style={{
              backgroundImage: `url('https://picsum.photos/300/200?random=${production.id}')`,
            }}
          >
            <h3>{production.title}</h3>
          </div>
        ))}
      </div>

      <footer className="footer">
        <h2>IKDOE</h2>
        <p>Volledige verzorging van creatieve producties</p>
      </footer>
    </div>
  );
}

export default SoloProductions;
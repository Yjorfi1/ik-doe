import { useParams, useNavigate } from 'react-router-dom';

const ProductionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productionData = {
    'level-twenty-nine': {
      title: 'LEVEL TWENTY NINE',
      type: 'COMMERCIAL',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      description: 'Hier komt je eigen tekst voor deze productie. ',
    },
    'voetbalclub-x': {
      title: 'VOETBALCLUB X',
      type: 'DOCUMENTAIRE',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      description: 'Hier komt je eigen tekst voor deze productie.',
    },
    'club-x': {
      title: 'CLUB X',
      type: 'PROMOTION',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
      description: 'Hier komt je eigen tekst voor deze productie.',
    },
  };

  const production = productionData[id];

  if (!production) {
    return (
      <div className="app">
        <header className="header">
          <h1>IKDOE</h1>
          <p>PRODUCTIE NIET GEVONDEN</p>
        </header>
        <section className="card">
          <h2>404</h2>
          <button onClick={() => navigate('/SoloProductions')}>Terug naar overzicht</button>
        </section>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>IKDOE</h1>
        <p>{production.title}</p>
      </header>

    
      <section className="card">
        <iframe
          width="100%"
          height="400"
          src={production.videoUrl}
          title={production.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

     
      <section className="description">
        <h2>{production.title}</h2>
        <span>{production.type}</span>
        <p>{production.description}</p>
        <button onClick={() => navigate('/SoloProductions')}>Terug naar overzicht</button>
      </section>

      <footer className="footer">
        <h2>IKDOE</h2>
        <p>Volledige verzorging van creatieve producties</p>
      </footer>
    </div>
  );
};

export default ProductionDetail;
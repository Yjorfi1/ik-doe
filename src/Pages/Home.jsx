import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Laatste placeholder1',
    image: 'https://images.unsplash.com/photo-1679926820632-92666b8f75d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'placeholder2',
    image: 'https://images.unsplash.com/photo-1761839257165-44f08ed617c7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'placeholder3',
    image: 'https://images.unsplash.com/photo-1597417725580-96a7124cae9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [current]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const { title, subtitle, image } = slides[current]

  return (
    <>
      <div className="homediv1">
        <h1 className="homelogo">IKDOE</h1>
        <p className="homedesc">Volledig ontzorgen van creatieve producties</p>
      </div>

      <h3>Laatste werk</h3>

      <div className="slider-wrapper">
        <div
          className="slide"
          style={{ backgroundImage: `url(${image})` }}
          aria-live="polite"
          aria-label={`Slide ${current + 1} van ${slides.length}`}
        >
          <div className="slide-overlay" />
          <div className="slide-content">
            <button className="slide-cta">Bekijk case</button>
          </div>
          <button className="slide-nav left" onClick={prevSlide} aria-label="Vorige slide">‹</button>
          <button className="slide-nav right" onClick={nextSlide} aria-label="Volgende slide">›</button>
        </div>
      </div>

      <div className="services">
        <div>
          <div className="service-image" />

          <section className="service-card">
            <div className="service-body">
              <h4>Solo producties</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.</p>
              <button className="service-cta">
                ↗
              </button>
            </div>



          </section>
        </div>
        <div>
          <div className="service-image" />

          <section className="service-card">
            <div className="service-body">
              <h4>Full service </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.</p>
              <button className="service-cta">
                ↗
              </button>
            </div>
          </section>
        </div>
        <div>
          <div className="service-image" />

          <section className="service-card">
            <div className="service-body">
              <h4>Talent management</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.</p>
              <button className="service-cta">
                ↗
              </button>
            </div>
          </section>
        </div>


      </div>

      <div>
        <h2 className='description'>WIJ ONTZORGEN CREATIEVE PRODUCTIES DOOR VAKMANSCHAP, NETWERK EN TALENTONTWIKKELING SAMEN TE BRENGEN. ONS DOEL IS ELKE VERHAAL MET DE HOOGSTE KWALITEIT TE VERBEELDEN.</h2>
      </div>


      <h3>Testimonials</h3>
      <div className='testimonials'>
        <div className='testimonial-card'>

        </div>
        <div className='testimonial-card'>

        </div>
        <div className='testimonial-card'>

        </div>
      </div>
    </>
  );
};

export default Home;
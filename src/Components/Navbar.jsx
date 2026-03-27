import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
    <div className="logo">IKDOE+</div>

    <div className="nav-links">
      <li><Link to="/SoloProduction"><p>Solo-productie</p></Link></li>
          <li><Link to="/FullService" ><p >Full service productieteam</p></Link></li>
          <li><Link to="/Talentmanagement" ><p >Talentmanagement</p></Link></li>
      <br/>      <br/>

          <li><Link to="/Booking" className="cta-button">help me</Link></li>
    </div>
  </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

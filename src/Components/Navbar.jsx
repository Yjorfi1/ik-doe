import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>IKDOE+</h1>
        <ul >
          <li><Link to="/SoloProductions"><p>Solo-productie</p></Link></li>
          <li><Link to="/FullService" ><p>Full service productieteam</p></Link></li>
          <li><Link to="/Talentmanagement" ><p>Talentmanagement</p></Link></li>
          <li><Link to="/Booking" ><p>Boek mij</p></Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

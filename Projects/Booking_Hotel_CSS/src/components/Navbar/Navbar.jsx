import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <span className='nav-logo'>Booking Hotel</span>
        <div className='navbar-item'>
          <button className='nav-button'>Register</button>
          <button className='nav-button'>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

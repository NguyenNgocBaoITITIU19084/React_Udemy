import LowerNavbar from './LowerNavbar';
import UpperNavbar from './UpperNavbar';

const Navbar = () => {
  return (
    <nav className='w-full'>
      <div>
        {/* upper navbar */}
        <UpperNavbar />

        {/* lower navbar */}
        <LowerNavbar />
      </div>
    </nav>
  );
};

export default Navbar;

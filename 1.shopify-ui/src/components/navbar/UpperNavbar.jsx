import { IoIosSearch } from 'react-icons/io';
import { FaBagShopping } from 'react-icons/fa6';

import DarkMode from '../DarkMode/DarkMode';
import Button from '../button/Button';

const UpperNavbar = () => {
  return (
    <nav className='shadow-md bg-white dark:bg-slate-900 dark:text-white duration-300 relative z-40'>
      <div className='container flex items-center justify-between bg-primary/40 py-2 px-4'>
        {/* logo */}
        <div className=''>
          <a
            href=''
            className='font-bold text-2xl sm:text-3xl flex items-center justify-center gap-2'
          >
            <FaBagShopping className='w-10 text-orange-600' />
            <span>Shopify</span>
          </a>
        </div>
        {/* search bar */}
        <div className='flex items-center gap-3'>
          <div className='group relative sm:block'>
            <input
              id='search-bar'
              name='search-bar'
              type='text'
              placeholder='searching...'
              className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border px-2 py-1 border-gray-500 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800'
            />
            <IoIosSearch className='text-gray-500 group-hover:text-primary absolute right-3 top-1/2 -translate-y-1/2' />
          </div>
          <Button className='group gap-3 flex items-center'>
            <span className='group-hover:block hidden transition-all duration-300'>
              Order
            </span>
            <FaBagShopping className='text-white text-2xl cursor-pointer' />
          </Button>
        </div>
        <DarkMode />
      </div>
    </nav>
  );
};

export default UpperNavbar;

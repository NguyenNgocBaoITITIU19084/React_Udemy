import { MdOutlineExpandMore } from 'react-icons/md';

import { MENU, DropdownLinks } from '../../contants/Menu';
import Dropdown from '../Dropdowm/Dropdown';

const LowerNavbar = () => {
  return (
    <nav className='w-full  dark:bg-slate-900 dark:text-white'>
      <ul className='sm:flex hidden justify-center items-center gap-5 shadow-md w-full py-2'>
        {MENU.map((data) => (
          <li key={data.id}>
            <a
              href={data.link}
              className='hover:text-primary duration-200 inline-block'
            >
              {data.name}
            </a>
          </li>
        ))}
        <Dropdown
          className=' group flex items-center gap-1'
          data={DropdownLinks}
        >
          Electronic
          <MdOutlineExpandMore className='mt-1 group-hover:rotate-180 duration-200' />
        </Dropdown>
      </ul>
    </nav>
  );
};

export default LowerNavbar;

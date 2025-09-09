import { useState } from 'react';

import { FaCloudMoon } from 'react-icons/fa';
import { CiCloudSun } from 'react-icons/ci';

import Button from '../button/Button';

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  function handleDarkMode() {
    let element = document.getElementsByTagName('body');
    if (theme === 'light') {
      element[0].classList.add('dark');
      setTheme('dark');
    } else {
      element[0].classList.remove('dark');
      element[0].classList.add('light');
      setTheme('light');
    }
  }

  return (
    <div>
      <Button onClick={handleDarkMode}>
        <span className='text-2xl'>
          {theme === 'light' ? <FaCloudMoon /> : <CiCloudSun />}
        </span>
      </Button>
    </div>
  );
};

export default DarkMode;
